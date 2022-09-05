@delay function lx_maketitle(com, _)
  title = locvar(:title)
  author = locvar(:author)
  date = locvar(:date)
  return """
  ~~~
  <h1 style="margin-bottom: 0; font-size: 40px;"> $title </h1>
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
