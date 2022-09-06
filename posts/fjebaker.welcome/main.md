+++
title = "AIMLAC Blogs Welcome"
author = "Fergus Baker"
affiliation = "2nd Year PhD student, University of Bristol"
date = Date(2022, 09, 04)
summary = "AIMLAC now has blogs! As part of our public engagement initiatives, we are now enabling students and staff alike to post insights into their research process, share and explain interesting results, and promote scientific discourse! This blog post aims to demonstrate how you can contribute, and highlights other activities to get involved with."

tags = ["news", "guide"]
+++

\maketitle

## Introduction

\tableofcontents


Welcome to the AIMLAC blogs!

## What and why?

The AIMLAC center for doctoral training is working to improve public engagement in the sciences whilst also providing students an opportunity to practice scientific and technical writing for a wider audience. Part of this effort is _this_ blog, a place to find insights into the research process as experienced by PhD students from a multitude of disciplines, brought together by a shared interest in developing expertise in AI, machine learning, and advanced computing. So put the kettle on, and have a peruse!

If you are a member of the public, you may find this useful for
- gaining an understanding of the work researchers are involved in;
- discovering new links and connections between scientific field;
- learning more about past and current UKRI funded research;
- asking members of the CDT questions about their work.

If you are a member of the AIMLAC CDT, you may wish to use this to
- check out what other students and staff are up to;
- leave a comment or help start a discussion on a post you find interesting;
- start [Contributing](#contributing) yourself, and author a blog post!


Below are some technical details relating to the organization of the [GitHub repository](https://github.com/CDT-AIMLAC/blogs) where this site is kept, and also guides for contributing.

## Contributing

The AIMLAC blogs are built using [Franklin.jl](https://franklinjl.org/), a feature-rich [static site](https://en.wikipedia.org/wiki/Static_web_page) generator, and the site itself is hosted using [GitHub pages](https://pages.github.com/). 

An advantage (or drawback, depending how you view it) of this is that there is no web-server listening for requests, and no shared state between visitors beyond what is in the GitHub repository. Posts are limited to relatively stateless interaction, and metadata associated with each post must occasionally be duplicated to ensure the build is self contained.

### Blog posts

If you would like to contribute a blog post, be sure you have familiarised yourself with the [directory structure](#directory_structure_of_a_post) and [anatomy of `main.md`](#anatomy_of_mainmd).

A new post is added by opening a pull requests (PR) on the [CDT-AIMLAC/blogs](https://github.com/CDT-AIMLAC/blogs) repository. Fork the repository, commit your post directory, and then open a pull request on the upstream repository.

Someone will review the post to ensure it meets all of the details to be plugged into the build system, and merged once everything is okay.

When writing a blog post, it is often desireable to see how the post will be formatted prior to opening the PR. Since blog posts are markdown, **any markdown previewer** will be able to give you a good indication of what your post will look like, but to get the _pristine_ preview, you will need to host a development server:

```
git clone "https://github.com/CDT-AIMLAC/blogs"
cd blogs
julia --project=. -e "using Pkg ; Pkg.instantiate(); using Franklin; serve()"
```

_Note_: this requires an installation of the the [Julia programming language](https://julialang.org/) (takes about 2 minutes).

### Site

Contributions to the blog website themselves are also welcome! In particular, anything aiding accessibility and readability, as well as commits that would make the site more portable, are desired.

To get started, you will need to a development server:

```
git clone "https://github.com/CDT-AIMLAC/blogs"
cd blogs
julia --project=. -e "using Pkg ; Pkg.instantiate(); using Franklin; serve()"
```

Please refer to the [Franklin.jl documentation](https://franklinjl.org/) concerning how to edit the website. More relevant directories may include

- `_css` for style sheets.
- `_layout` for HTML documents which dictate the layout of different pages
- `_libs` stores relevant JavaScript libraries which may be fetched by the site
- `scripts` contains Julia parsing and formatting scripts, executed when compiling the static pages

JavaScript (NodeJS) packages may be installed for development, and may be made accessible to the site as needed. In general, the site is trying to avoid run-time JavaScript when possible to keep the site light-weight and accessible.


## Overview of the blog repository

### Directory structure of a post

Blog posts are organized into directories, such that all content related to a particular post is co-located. The directories themselves should follow a naming convention:

```
user.post-name
```

The `user` is conventionally the GitHub username of the author, and the `post-name` is any [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case) short title for the blog post.

The contents of this directory should minimally include a `main.md`, a [Franklin.jl-flavoured Markdown](https://franklinjl.org/syntax/markdown/#markdown_syntax) file with the text content of the post, and any number of auxillary files (images, audio, data, ...).

\example{
The user `test-user` has written a blog post on heating elements in toasters. Their post has a number of figures and a small CSV file associated, so the user has chosen the following directory structure:

```
test-user.toasters/
├── brand-data.csv
├── heating-curve.gif
├── main.md
└── toaster-schematic.png
```
}

All blog post directories are kept in the `posts` top level directory in the blogs repository. Note that a post author may choose to nest several directories in their post directory, e.g. `figures/`, `data/`, in order to help organize their post. The precise details of organization are left to the preference of the author.

### Anatomy of `main.md`

The post text content is written into a file named `main.md` using [Franklin.jl-flavoured Markdown](https://franklinjl.org/syntax/markdown/#markdown_syntax). An additional requirement for the post is a preamble with some meta-data:

```
+++
author = "Name Surname"
affiliation = "The University"
title = "Blog Post Title"
date = Date(2022, MM, DD)
summary = "Short summary of the blog post."
tags = ["tag1", "tag2"]
+++
```

This is used by the parsing scripts to assemble the corresponding _post-card_ for a blog post, and to associate the correct tags and date with a given post. It is also used to help generate the title of your blog using

```
\maketitle
```

To see examples of this, see the `posts` directory of any blog post in the [CDT-AIMLAC/blogs](https://github.com/CDT-AIMLAC/blogs/tree/main/posts) repository.

## Licensing

The source code and content of this repository is [MIT licensed](https://github.com/CDT-AIMLAC/blogs/blob/main/LICENSE), which extends itself to all posts on this site _unless the author_ specifies differently. In such cases, a `LICENSE` file will be included in the post directory to account for the author's wishes.

\addcomments