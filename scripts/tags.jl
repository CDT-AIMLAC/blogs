using Colors
using MemoizedMethods
using Random
Random.seed!(42)

@memoize _tag_color(tag) = "#" * hex(HSV(floor(Int, rand() * 1000), 1, 1)) 

function _get_all_tags()
    global ALL_POSTS
    posts = ALL_POSTS
    reduce(vcat, map(i -> getproperty(i, :tags), posts)) |> unique |> sort
end

function format_tag(tag)
    color = _tag_color(tag)
    """<a href="../tag/$tag"> $tag </a><div class="tag-color-box" style="background-color: $color;"></div>"""
end

function hfun_all_tag_list()
    tags = _get_all_tags()
    html_tags = ["<li> $i </li>" for i in format_tag.(tags)]
    return "<ul>" * join(html_tags, "\n") * "</ul>"
end
