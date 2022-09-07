<p align="center" style="margin: 1em;">
    <img src="_assets/AIMLAC-logo.png" alt="AIMLAC logo.">
</p>

# AIMLAC Blogs

[![Build and Deploy](https://github.com/CDT-AIMLAC/blogs/actions/workflows/Deploy.yml/badge.svg?branch=main)](https://github.com/CDT-AIMLAC/blogs/actions/workflows/Deploy.yml)

Welcome to the AIMLAC blogs! See them live [here](https://cdt-aimlac.github.io/blogs/).

## Contributing

All contributions are very welcome! Please see the ["AIMLAC Blogs Welcome" post](https://cdt-aimlac.github.io/blogs/posts/fjebaker.welcome/main/) to learn more about how and where to contribute.


## Developing

To build and serve the blogs locally, clone this repository and instantiate the Julia environment:

```
git clone "https://github.com/CDT-AIMLAC/blogs"
cd blogs
julia --project=. -e "using Pkg; Pkg.instantiate()"
```

Then start a development server to host the blogs locally:

```
julia --project=. -e "using Franklin; serve()"
```

### Updating search index

Searches are operated with [lunr](https://lunrjs.com/), and requires generating an index file to work properly. After starting the development server, Franklin.jl exports `lunr()` to rebuild the index. Note that this can only be done _after_ the `__site` director has been generated.

