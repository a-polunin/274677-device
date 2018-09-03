const writeUsBtn = document.querySelector(".write_us_btn");
const writeUsModal = document.querySelector(".popup_write_us");
const writeUsForm = writeUsModal.querySelector("form");
const name = writeUsModal.querySelector("[name=name]");
const email = writeUsModal.querySelector("[name=email]");
const mailText = writeUsModal.querySelector("[name=mail_text]");
const mapContainer = document.querySelector(".map_container");
const mapModal = document.querySelector(".popup_map");
const serviceList = document.querySelector(".services_list");
const serviceInfoItems = document.querySelector(".service_info_item");

writeUsBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  writeUsModal.style.display = "block";
  login.focus();
});

writeUsModal.querySelector(".close_modal").addEventListener("click",()=>{
  writeUsModal.style.display = "none";
});

mapContainer.addEventListener("click",(e)=>{
  e.preventDefault();
  mapModal.style.display = "block";
});

mapModal.querySelector(".close_modal").addEventListener("click",()=>{
  mapModal.style.display = "none";
});

serviceList.addEventListener("click",(e)=>{
  if(!e.target.hasAttribute("data-service-btn")) return false;
  e.preventDefault();

  if(e.target.getAttribute("data-service-btn") == "delivery_btn"){
    delivery_service.style.display = "block";
    guarantee_service.style.display = "none";
    credit_service.style.display = "none";
  }else if(e.target.getAttribute("data-service-btn") == "guarantee_btn"){
    delivery_service.style.display = "none";
    guarantee_service.style.display = "block";
    credit_service.style.display = "none";
  }else if(e.target.getAttribute("data-service-btn") == "credit_btn"){
    delivery_service.style.display = "none";
    guarantee_service.style.display = "none";
    credit_service.style.display = "block";
  }
});