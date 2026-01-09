function generate(){
['orderNo','orderDate','quality','quantity','rate','totalQty','chalan','payment','perDay','delivery','weaver','brokerName','brokerNo']
.forEach(id=>document.getElementById('p'+id).innerText=document.getElementById(id).value||'-')
}
function download() {
  const element = document.getElementById('preview');
  const name = document.getElementById('orderNo').value || 'order-bill';

  html2canvas(element, {
    scale: 2,                 // consistent quality
    useCORS: true,
    backgroundColor: null,
    width: element.offsetWidth,
    height: element.offsetHeight,
    windowWidth: element.offsetWidth,
    windowHeight: element.offsetHeight
  }).then(canvas => {
    const a = document.createElement('a');
    a.download = name.replace(/[^a-zA-Z0-9_-]/g, '_') + '.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  });
}
function share(){
html2canvas(document.getElementById('preview')).then(c=>{
c.toBlob(b=>{
let f=new File([b],'order.png',{type:'image/png'});
navigator.canShare&&navigator.canShare({files:[f]})?navigator.share({files:[f]}):window.open('https://wa.me/','_blank')
})
})
}
