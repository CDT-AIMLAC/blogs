+++
author = "CDT AIMLAC"
mintoclevel = 2
prepath = "blogs"

# Add here files or directories that should be ignored by Franklin, otherwise
# these files might be copied and, if markdown, processed by Franklin which
# you might not want. Indicate directories by ending the name with a `/`.
# Base files such as LICENSE.md and README.md are ignored by default.
ignore = ["node_modules/"]

# RSS (the website_{title, descr, url} must be defined to get RSS)
generate_rss = true
rss_full_content = false

website_title = "AIMLAC Blogs"
website_descr = "Blogs for the AIMLAC center for doctoral training."
website_url   = "cdt-aimlac.github.io/blogs"
+++

\newcommand{\maketitle}{{{maketitle}}}
\newcommand{\addcomments}{{{addcomments}}}
\newcommand{\example}[1]{@@example @@title Example @@ @@content #1 @@ @@}