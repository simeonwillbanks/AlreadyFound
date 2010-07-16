INTRODUCTION
============
**AlreadyFound** is a search bookmarklet. Have you ever queried Google for something, and eventually found the answer in your bookmarks? Instead of searching Google first, use **AlreadyFound** to simultaneously search Google and your Delicious bookmarks!!!

Thanks to [Mitch Matuson](http://github.com/mmatuson) for inspiration.

INSTALLATION
------------  
1.  Open _./AlreadyFound/bookmarklet.js_ in an editor and set `d['username']` with your username
2.  Drag _./AlreadyFound/bookmarklet.js_ to your browsers toolbar

**Note:** Out of the box, Internet Explorer doesn't support JavaScript's `prompt()` method. Therefore, **AlreadyFound** will only work in standards-compliant browsers like Safari, Firefox or Chrome.

USAGE
---- 
Click the toolbar button and enter your query. Alternatively, you can select your queries text and click the toolbar button. In your parent window, a google search will render.  In a new window, a Delicious search of your bookmarks will render.

LICENSE
-------  
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)