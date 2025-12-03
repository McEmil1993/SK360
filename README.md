

---

# 🟦 SK360 Admin — React + Vite

Simple installation guide for local development or running on another laptop.

---

# ✅ **System Requirements**

To avoid errors, **all developers must use the same Node.js version:**

### 🟩 Node.js Version Required

```
v22.13.1
```

⚠ Using a different Node version may cause:
– Vite not starting
– React plugin errors
– Build failures

Download exact version here:
🔗 [https://nodejs.org/en/download/prebuilt-installer](https://nodejs.org/en/download/prebuilt-installer)
(Select **Node 22.13.1**)

---

# 📦 **Included in the Project**

Once Node.js v22.13.1 is installed, all packages will automatically install:

✔ React (latest)
✔ React Router
✔ Vite
✔ Color Admin CSS & JS
✔ Bootstrap
✔ Charts (ApexCharts / Chart.js)
✔ Ionicons / FontAwesome
✔ All dependencies from `package.json`

No additional setup needed.

---

# 🚀 How to Run on Any Laptop

### **1. Install Node.js (must be v22.13.1)**

Verify:

```bash
node --version
```

---

### **2. Clone or download the project**

**Using Git:**

```bash
git clone https://github.com/McEmil1993/SK360.git
```

OR
Download ZIP → Extract.

---

### **3. Open the folder**

```bash
cd sk360-admin
```

---

### **4. Install dependencies**

```bash
npm install
```

---

### **5. Start local development**

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173/
```

---

# 📁 Folder Structure

```
src/
 ├── pages/
 │     ├── Dashboard.jsx
 │     ├── UserManage.jsx
 │     ├── Profile.jsx
 │     └── Template.jsx   ← (Use this for creating new pages)
 │
 ├── components/
 ├── layouts/
 ├── services/
 ├── routes/
 ├── assets/
 └── main.jsx
```

---

# ➕ **📌 Creating a New Page (IMPORTANT)**

To keep your project clean and consistent, **all new pages must follow the template file**:

### 📍 Template Location:

```
src/pages/Template.jsx
```

### 📝 Steps to Create a New Page

1️⃣ Copy the file:

```
Template.jsx → NewPage.jsx
```

2️⃣ Open NewPage.jsx and **rename the component**:

```jsx
const Template = () => { ... }
// ⬇ CHANGE TO
const Reports = () => { ... }
```

3️⃣ Export properly:

```jsx
export default Reports;
```

4️⃣ Add your new page inside `routes.js` (private route):

```jsx
{
  path: "/reports",
  element: (
    <PrivateRoute>
      <Reports />
    </PrivateRoute>
  ),
}
```

5️⃣ Add sidebar link (optional):

```jsx
<NavLink to="/reports" className="menu-item">Reports</NavLink>
```

✅ **DONE — Page works automatically with Topbar, Sidebar, Footer, and Color Admin!**

---

# 🔧 Build for Production

```bash
npm run build
```

Output files will be generated in:

```
dist/
```

This folder is ready for deployment (hosting, Nginx, Apache, etc.)

---

# 📝 Notes

✔ Always use Node **22.13.1**
✔ After pulling new updates, run:

```bash
npm install
```

✔ If Vite refuses to run, reset your environment:

```bash
rm -rf node_modules
npm install
```

✔ If still broken, also delete Vite cache:

```
rm -rf node_modules .vite
npm install
```

---

