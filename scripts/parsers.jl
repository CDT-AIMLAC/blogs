using Dates 
using Base

# global consts
const POSTS_DIRECTORY = "posts"
const POSTS_MAIN = "main.md"

struct BlogPost
    path::String
    author::String
    title::String
    summary::String
    date::DateTime
    tags::Vector{String}
end

Base.isless(p1::BlogPost, p2::BlogPost) = p1.date < p2.date

function BlogPost(dir)
    f = joinpath(dir, POSTS_MAIN)
    author = pagevar(f, :author)
    title = pagevar(f, :title)
    summary = pagevar(f, :summary)
    date = pagevar(f, :date)


    tags = pagevar(f, :tags)
    if isempty(tags)
        @warn "$f has no tags field."
    end

    BlogPost(
        # trim off the `.md` extension
        f[1:end-3], author, title, summary, date, tags
    )
end

function _get_posts()
    # get all subdirectories
    subdirs = filter(isdir, readdir(POSTS_DIRECTORY, join=true))
    # filter those which contain a `main.md` file
    post_subdirs = filter(subdirs) do d
        files = readdir(d)
        POSTS_MAIN in files
    end
    map(BlogPost, post_subdirs)
end
# poor man's memoize
const ALL_POSTS = _get_posts()

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
                $(b.summary)        
                <br>
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
    global ALL_POSTS
    posts = ALL_POSTS
    sort!(posts; rev=true)

    last_index = min(parse(Int, first(n)), length(posts))
    posts = posts[1:last_index]

    return join(format_summary.(posts), "\n")
end