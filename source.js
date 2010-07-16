var q,d=[],g=[],s;
d['username']='simeonsdotnet';
d['url']='http://delicious.com/search?p=%q&chk=&context=userposts%7C%u&fr=del_icio_us&lc=1';
g['url']='http://www.google.com/search?q=%q';
if(window.getSelection){
  s=window.getSelection();
  if(s.toString().length>0)
    q=s;
}
if(!q)
  void(q=prompt('Enter%20search%20term%20for%20Google%20and%20Delicious',''));
if(q){
  q=escape(q);
  window.open(d['url'].replace('%q',q).replace('%u',d['username']),'_blank');
  window.open(g['url'].replace('%q',q),'_parent');
}