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
end

Base.isless(p1::BlogPost, p2::BlogPost) = p1.date < p2.date

function BlogPost(dir)
    f = joinpath(dir, POSTS_MAIN)
    author = pagevar(f, :author)
    title = pagevar(f, :title)
    summary = pagevar(f, :summary)
    date = pagevar(f, :date)

    BlogPost(
        # trim off the `.md` extension
        f[1:end-3], author, title, summary, date
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

function format_summary(b::BlogPost)
    date = Dates.format(b.date, "d u Y")
    """
    <div class="post-card">
        <div>
        <a class="post-card" href="/$(b.path)">
            <h3>$(b.title)</h3> 
            $(b.summary)        
            <br>
            <small style="color: grey;"><i> $(date) - Author: $(b.author)</i></small>
        </a>
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