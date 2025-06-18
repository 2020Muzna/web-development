// signup.js
import {supabase} from './supabase-config.js';

document.getElementById("signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    alert("Signup failed: " + error.message);
  } else {
    window.location.href = "login.html";
  }
});


