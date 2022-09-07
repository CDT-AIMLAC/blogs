@delay function hfun_maketitle()
    title = locvar(:title)
    author = locvar(:author)
    affiliation = locvar(:affiliation)
    date = locvar(:date)
    tags = locvar(:tags)
    fmt_tags = if !isempty(tags)
        join(format_tag.(tags), ", ")
    else
        ""
    end
    
    return """
    <div class="post-title">
    <h1> $title </h1>
    <small style="margin-right: 1em;"> <i> $(fmt_tags) </i> </small>
    <div style="margin-top: 0; width : 100%;">
        <div style="float: left; text-align: left;"> 
            <small> <i> Author: $author ($affiliation)</i> </small> 
        </div>
        <div style="text-align: right;"> 
            <small> <i> $date </i> </small> 
        </div>
    </div>
    </div>
    """
end

@delay function hfun_addcomments()
    return """
    <script src="https://utteranc.es/client.js"
        repo="CDT-AIMLAC/blogs"
        issue-term="pathname"
        label="comments"
        theme="github-light"
        crossorigin="anonymous"
        async>
    </script>
    """
end
