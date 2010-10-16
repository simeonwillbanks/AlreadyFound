var q,d,g,s;
duser='username';
dwin='_blank';
gwin='_parent';
durl='http://delicious.com/search?p=%q&chk=&context=userposts%7C%u&fr=del_icio_us&lc=1';
gurl='http://www.google.com/search?q=%q';
if(window.getSelection){
  s=window.getSelection();
  if(s.toString().length>0)
    q=s;
}
if(!q)
  void(q=prompt('Enter search term for Google and Delicious',''));
if(q){
  q=escape(q);
  window.open(durl.replace('%q',q).replace('%u',duser),dwin);
  window.open(gurl.replace('%q',q),gwin);
}