var writeUsBtn = document.querySelector(".write_us_btn");
var writeUsModal = document.querySelector(".popup_write_us");
var writeUsForm = writeUsModal.querySelector("form");
var inputName = writeUsModal.querySelector("#name");
var inputEmail = writeUsModal.querySelector("#email");
var mailText = writeUsModal.querySelector("#mail_text");

var mapContainer = document.querySelector(".map_container");
var mapModal = document.querySelector(".popup_map");

var serviceList = document.querySelector(".services_list");
var serviceInfoItems = document.querySelector(".service_info_item");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("inputName");
} catch (err) {
  isStorageSupport = false;
}

writeUsBtn.addEventListener("click", function(e) {
  e.preventDefault();
  writeUsModal.classList.add("modal_show");
  if (storage) {
    inputName.value = storage;
    inputEmail.value = storage;
    mailText.focus();
  } else {
    inputName.focus();
  }
});

writeUsModal.querySelector(".close_modal").addEventListener("click", function(e) {
  writeUsModal.classList.remove("modal_show");
  writeUsModal.classList.remove("modal_error");

  inputName.classList.remove("input_error");
  inputEmail.classList.remove("input_error");
  mailText.classList.remove("input_error");
});

mapContainer.addEventListener("click", function(e) {
  e.preventDefault();
  mapModal.classList.add("modal_show");
});

mapModal.querySelector(".close_modal").addEventListener("click", function(e) {
  mapModal.classList.remove("modal_show");
});

serviceList.addEventListener("click", function(e) {
  if (!e.target.hasAttribute("data-service-btn")) return false;
  e.preventDefault();
  
  if (e.target.getAttribute("data-service-btn") == "delivery_btn") {
    delivery_service.classList.remove("show_off");
    delivery_service_btn.classList.add("service_active");

    guarantee_service.classList.add("show_off");
    guarantee_service_btn.classList.remove("service_active");

    credit_service.classList.add("show_off");
    credit_service_btn.classList.remove("service_active");
  } else if (e.target.getAttribute("data-service-btn") == "guarantee_btn") {
    delivery_service.classList.add("show_off");
    delivery_service_btn.classList.remove("service_active");

    guarantee_service.classList.remove("show_off");
    guarantee_service_btn.classList.add("service_active");

    credit_service.classList.add("show_off");
    credit_service_btn.classList.remove("service_active");
  } else if (e.target.getAttribute("data-service-btn") == "credit_btn") {

    delivery_service.classList.add("show_off");
    delivery_service_btn.classList.remove("service_active");

    guarantee_service.classList.add("show_off");
    guarantee_service_btn.classList.remove("service_active");

    credit_service.classList.remove("show_off");
    credit_service_btn.classList.add("service_active");
  }
});

writeUsForm.addEventListener("submit", function(e) {
  if (!inputName.value || !email.value || !mailText.value) {
    e.preventDefault();
    inputName.value ? inputName.classList.remove("input_error") : inputName.classList.add("input_error");
    inputEmail.value ? inputEmail.classList.remove("input_error") : inputEmail.classList.add("input_error");
    mailText.value ? mailText.classList.remove("input_error") : mailText.classList.add("input_error");
    writeUsModal.classList.remove("modal_error");
    writeUsModal.offsetWidth = writeUsModal.offsetWidth;
    writeUsModal.classList.add("modal_error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("inputName", inputName.value);
      localStorage.setItem("inputEmail", inputEmail.value);
    }
  }
});

window.addEventListener("keydown",function(e){
  if (e.keyCode === 27) {
    e.preventDefault();
    if (writeUsModal.classList.contains("modal_show")){
      writeUsModal.classList.remove("modal_show");
      writeUsModal.classList.remove("modal_error");
    }else if(mapModal.classList.contains("modal_show")){
      mapModal.classList.remove("modal_show");
    }
  }
});