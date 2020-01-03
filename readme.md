







<figure>
	<img src='/img/tasks/copyright/copyright-splash.png' width='100%' />
	<figcaption></figcaption>
</figure>

# Copyright

## Add a copyright to your source files


<address>
<img src='/img/rwtools.png' width=80 /> by <a href='https://readwritetools.com' title='Read Write Tools'>Read Write Tools</a> <time datetime=2019-10-20>Oct 20, 2019</time></address>



<table>
	<tr><th>Abstract</th></tr>
	<tr><td>The <span class=product>Copyright</span> command line utility simplifies and standardizes the process of adding a copyright notice to source code files.</td></tr>
</table>

### Motivation

When source code files are prepared for distribution it is common for comments
to be stripped and text to be minified. As a result, any legal notices regarding
ownership and licensing is removed. This tool can be used to add that
information back into the distributable file.

### Prerequisites and installation

The <span>Copyright</span> utility uses Node.js. Package installation is
done via NPM. These are the only two prerequisites.

To install the utility and make it available to your Bash shell, use this
command.

```bash
[user@host]# npm install -g copyright
```

### Usage

The software is invoked from the command line with:

```bash
[user@host]# copyright [copyright file] [destination file] 
```

The `destination file` is prepended with the contents of the `copyright file`. The
contents should be in *comment form*, using whatever syntax is appropriate to the
source code language of the destination. So `/* ... */` for CSS, or `// ... ` for
JavaScript, or `<!-- ... --`> for HTML, etc. Linefeeds in the copyright file are
retained as is.

For the most efficient use of resources, this utility should be invoked by a
build tool that is sensitive to file modification timestamps, so that it is
triggered for each file in a nested hierarchy only when a source file is
changed. (The Read Write Tools `prorenata` builder has this capability.)

### License and availability

The <span>copyright</span> command line utility is licensed under the MIT
License. It may be cloned from <a href='https://github.com/readwritetools/copyright'>Github</a>
, or installed via <a href='https://www.npmjs.com/package/copyright-notice'>NPM</a>
.

<img src='/img/blue-seal-mit.png' width=80 align=right />

<details>
	<summary>MIT License</summary>
	<p>Copyright © 2020 Read Write Tools.</p>
	<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
	<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
	<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
</details>

