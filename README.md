# Bajaj Finserv Health Full-Stack API – VIT Challenge  

This project implements a **REST API** that processes an array of inputs and returns categorized data including numbers, alphabets, special characters, and custom transformations.  
It was built as part of the **VIT Full Stack Challenge**.  

---

## 🚀 Features
- Accepts a `POST` request with an array of data.  
- Returns:  
  - `is_success`: Status of the request  
  - `user_id`: Full name in lowercase with underscores + date of birth  
  - `email` and `roll_number`  
  - Categorized arrays: Odd numbers, Even numbers, Alphabets (uppercase), Special characters  
  - `sum`: Sum of all numeric values (as string)  
  - `concat_string`: Reverse concatenated alphabets in alternating caps  

---

## 🛠️ Tech Stack
- **Node.js** with **Express**  
- **Body-parser** for JSON parsing  
- Hosted on **Vercel**  

---

  ## 🌍 Hosted API
  Base URL:  https://bajaj-finserv-health-full-stack-vit.vercel.app/bfhl

  
---

## 📥 Example Request
```json
{
  "data": ["m", "186", "24", "5", "E", "$", "#"]
}
{
  "is_success": true,
  "user_id": "mrithulasree_n_07112004",
  "email": "mrithulasree.n2022@vitstudent.ac.in",
  "roll_number": "22BLC1225",
  "odd_numbers": ["5"],
  "even_numbers": ["186", "24"],
  "alphabets": ["M", "E"],
  "special_characters": ["$", "#"],
  "sum": "215",
  "concat_string": "Em"
}
```
