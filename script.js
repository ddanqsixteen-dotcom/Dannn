let selectedProduct = "";
let selectedPrice = 0;

function rupiah(number){
  return new Intl.NumberFormat("id-ID", {
    style:"currency",
    currency:"IDR",
    maximumFractionDigits:0
  }).format(number);
}

function scrollToProducts(){
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

function openPreview(){
  document.getElementById("previewModal").classList.add("show");
}

function closePreview(event){
  if(!event || event.target.id === "previewModal"){
    document.getElementById("previewModal").classList.remove("show");
  }
}

function openCheckout(product, price){
  selectedProduct = product;
  selectedPrice = price;
  document.getElementById("checkoutProduct").textContent = product;
  document.getElementById("checkoutPrice").textContent = rupiah(price);
  document.getElementById("checkoutModal").classList.add("show");
}

function closeCheckout(event){
  if(!event || event.target.id === "checkoutModal"){
    document.getElementById("checkoutModal").classList.remove("show");
  }
}

function orderViaWhatsApp(){
  const name = document.getElementById("buyerName").value.trim();
  const phone = document.getElementById("buyerPhone").value.trim();

  if(!name || !phone){
    alert("Isi nama dan nomor WhatsApp dulu ya.");
    return;
  }

  // GANTI NOMOR INI dengan nomor WhatsApp penjual.
  const sellerNumber = "6281234567890";

  const text =
    `Halo FHARID RMX,%0A` +
    `Saya mau membeli:%0A` +
    `Produk: ${selectedProduct}%0A` +
    `Harga: ${rupiah(selectedPrice)}%0A` +
    `Nama: ${name}%0A` +
    `WhatsApp: ${phone}`;

  window.open(`https://wa.me/${sellerNumber}?text=${text}`, "_blank");
}

// Tutup modal dengan tombol Escape.
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape"){
    closePreview();
    closeCheckout();
  }
});
