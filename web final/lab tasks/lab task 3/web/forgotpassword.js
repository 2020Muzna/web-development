// forgotpassword.js
import { supabase } from './supabase-config.js';

document.getElementById("forgotPasswordForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("forgotPasswordEmail").value;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://127.0.0.1:5500/fyp/reset.html'  // Must be allowed in Supabase Auth Redirect URLs
  });

  if (error) {
    alert("Error sending reset email: " + error.message);
  } else {
    alert("Password reset email sent! Please check your inbox.");
  }
});
