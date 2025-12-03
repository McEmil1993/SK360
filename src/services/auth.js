const AUTH_KEY = "sk360_auth";

export function login(email, password) {
    console.log("Attempting login with", email, password);
  if (email === "admin@gmail.com" && password === "admin123") {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ email }));
    return { success: true };
  }
  return { success: false, message: "Invalid Email or Password" };
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
  return localStorage.getItem(AUTH_KEY) !== null;
}
