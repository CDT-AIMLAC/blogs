using Dates 
using Base

# global consts
const POSTS_DIRECTORY = "posts"
const POSTS_MAIN = "main.md"

struct BlogPost
    path::String
    author::String
    affiliation::String
    title::String
    summary::String
    date::DateTime
    tags::Vector{String}
end

Base.isless(p1::BlogPost, p2::BlogPost) = p1.date < p2.date

function BlogPost(f)
    author = pagevar(f, :author)
    affiliation = pagevar(f, :affiliation)
    title = pagevar(f, :title)
    summary = pagevar(f, :summary)
    date = pagevar(f, :date)


    tags = pagevar(f, :tags)
    if isempty(tags)
        @warn "$f has no tags field."
    end

    BlogPost(
        # trim off the `.md` extension
        f, author, affiliation, title, summary, date, tags
    )
end

@memoize function _get_posts()
    # get all subdirectories
    subdirs = filter(isdir, readdir(POSTS_DIRECTORY, join=true))
    # filter those which contain a `main.md` file
    post_subdirs = filter(subdirs) do d
        files = readdir(d)
        POSTS_MAIN in files
    end
    fs = joinpath.(post_subdirs, POSTS_MAIN)
    # trim `.md` extension
    fs = [i[1:end-3] for i in fs]
    map(BlogPost, fs)
end

_get_posts_from_files(fs) = map(BlogPost, fs)

function format_summary(b::BlogPost)
    date = Dates.format(b.date, "d u Y")
    selected_tags = format_tag.(b.tags)
    last_index = min(length(selected_tags), 5)
    selected_tags = selected_tags[1:last_index]
    tags = join(selected_tags, ",")
    """
    <div class="post-card">
        <div>
            <a id="post-card-selection" href="/$(b.path)">
                <h3>$(b.title)</h3> 
                <p> $(b.summary) </p>
                <p style="text-align: right;"> <small id="view-text"> &#10174; View post </small> </p>
                <small style="color: grey;"><i> $(date) - Author: $(b.author)</i></small>
            </a>
            <hr>
            <div class="post-card-tags">
                <small style="margin-right: 1em;"> <i> $(tags) </i> </small>
            </div>
        </div>
    </div>
    """
end

function hfun_posts_chronological(n)
    posts = _get_posts()
    sort!(posts; rev=true)

    last_index = min(parse(Int, first(n)), length(posts))
    posts = posts[1:last_index]

    return join(format_summary.(posts), "\n")
end