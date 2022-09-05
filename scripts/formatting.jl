@delay function lx_maketitle(com, _)
    title = locvar(:title)
    author = locvar(:author)
    date = locvar(:date)
    tags = locvar(:tags)
    fmt_tags = if !isempty(tags)
        join(format_tag.(tags), ", ")
    else
        ""
    end
    
    return """
    ~~~
    <h1 style="margin-bottom: 0; font-size: 40px;"> $title </h1>
    <small style="margin-right: 1em;"> <i> $(fmt_tags) </i> </small>
    <div style="margin-top: 0; width : 100%;">
        <div style="float: left; text-align: left;"> 
            <small> <i> Author: $author </i> </small> 
        </div>
        <div style="text-align: right;"> 
            <small> <i> $date </i> </small> 
        </div>
    </div>
    ~~~
    """
end
