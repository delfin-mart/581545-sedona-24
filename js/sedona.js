  var link = document.querySelector(".hotel-search_btn");  
  var popup = document.querySelector(".modal-popup");
  var close = popup.querySelector(".modal-close");  
  var form = popup.querySelector("form");
  var age = popup.querySelector("[name=age]");
  var child = popup.querySelector("[name=child]");  
  var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("age");
  } catch (err) {
    isStorageSupport = false;
  }
  
   try {
    storage = localStorage.getItem("child");
  } catch (err) {
    isStorageSupport = false;
  }
  	
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");    
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
  
   form.addEventListener("submit", function (evt) {
    if (!age.value || !child.value) {
      evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;	   
    } else {
    if (isStorageSupport) {
        sessionStorage.setItem("age", age.value);
		sessionStorage.setItem("child", child.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
      }
    }
  });
  
