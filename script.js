function generate(){
['orderNo','orderDate','quality','quantity','rate','totalQty','chalan','payment','perDay','delivery','weaver','brokerName','brokerNo']
.forEach(id=>document.getElementById('p'+id).innerText=document.getElementById(id).value||'-')
}
function download(){
html2canvas(document.getElementById('preview')).then(c=>{
let a=document.createElement('a');
let n=document.getElementById('orderNo').value||'order-bill';
a.download=n.replace(/[^a-zA-Z0-9_-]/g,'_')+'.png';
a.href=c.toDataURL();
a.click()
})
}
function share(){
html2canvas(document.getElementById('preview')).then(c=>{
c.toBlob(b=>{
let f=new File([b],'order.png',{type:'image/png'});
navigator.canShare&&navigator.canShare({files:[f]})?navigator.share({files:[f]}):window.open('https://wa.me/','_blank')
})
})
}
