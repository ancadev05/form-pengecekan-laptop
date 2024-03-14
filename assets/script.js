// function print halaman web
// function printArea(print) {
//   // agar halaman tidak reload saat menjalankan fungsi
//   event.preventDefault()

//   const printPage = document.getElementById("print").innerHTML;
//   const oriPage = document.body.innerHTML;

//   document.body.innerHTML = printPage;
//   window.print();
//   document.body.innerHTML = oriPage;
  
// }

document.getElementById('cetak').addEventListener('click', function(){
  // const printPage = document.getElementById("print").innerHTML;
  // const oriPage = document.body.innerHTML;
  
  // document.body.innerHTML = printPage;
  // document.body.innerHTML = oriPage;
  event.preventDefault()
  window.print()
})