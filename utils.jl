function hfun_bar(vname)
  val = Meta.parse(vname[1])
  return round(sqrt(val), digits=2)
end

function hfun_m1fill(vname)
  var = vname[1]
  return pagevar("index", var)
end

function lx_baz(com, _)
  # keep this first line
  brace_content = Franklin.content(com.braces[1]) # input string
  # do whatever you want here
  return uppercase(brace_content)
end

@delay function lx_maketitle(vname, _)
  title = locvar(:title)
  author = locvar(:author)
  date = locvar(:date)
  return """
  ~~~
  <h1 style="margin-bottom: 0;"> $title </h1>
  <div style="margin-top: 0.5em; width : 100%;">
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
