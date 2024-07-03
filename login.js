document.getElementById("login-btn").addEventListener("click", function () {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("join-form").style.display = "none";
  document.getElementById("click-form").style.display = "none";

  // underline
  document.getElementById("login-btn").classList.add("active");
  document.getElementById("join-btn").classList.remove("active");
  // font weight
  document.getElementById("login-btn").style.fontWeight = "700";
  document.getElementById("join-btn").style.fontWeight = "400";
});

document.getElementById("join-btn").addEventListener("click", function () {
  document.getElementById("join-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("click-form").style.display = "none";

  // underline
  document.getElementById("join-btn").classList.add("active");
  document.getElementById("login-btn").classList.remove("active");
  // font weight
  document.getElementById("join-btn").style.fontWeight = "700";
  document.getElementById("login-btn").style.fontWeight = "400";
});

document.getElementById("click-btn").addEventListener("click", function () {
  document.getElementById("click-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
});

document.getElementById("cannel-btn").addEventListener("click", function () {
  document.getElementById("click-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});
