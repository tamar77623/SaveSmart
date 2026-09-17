# 💰 SaveSmart - Smart Discount & Savings Calculator

**SaveSmart** is a lightweight, interactive web tool designed to help users instantly calculate percentage discounts, track total money saved, and compute final prices including sales tax with a single click.

---

## 🚀 Key Features

* ⚡ **Real-Time Calculations:** Instant updates for discount amounts and final costs without page reloads.
* 💵 **Savings Breakdown:** Clearly displays the exact amount of money saved.
* 🧾 **Tax Support:** Calculates sales tax percentages to provide an accurate total cost.
* 📱 **Responsive Design:** Optimized layout for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic structure and form elements.
* **CSS3:** Clean styling, responsive layout, and visual feedback.
* **JavaScript (Vanilla JS):** Core mathematical logic and DOM manipulation.

---

## 🧮 Mathematical Logic

The application processes inputs using the following steps:

1. **Calculate Discount Amount:**  
   $$\text{Discount Amount} = \frac{\text{Original Price} \times \text{Discount Percentage}}{100}$$

2. **Calculate Price After Discount:**  
   $$\text{Price After Discount} = \text{Original Price} - \text{Discount Amount}$$

3. **Calculate Final Price (Including Tax):**  
   $$\text{Final Price} = \text{Price After Discount} + \left(\frac{\text{Price After Discount} \times \text{Tax Percentage}}{100}\right)$$

---

## 📂 Getting Started Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/SaveSmart.git](https://github.com/your-username/SaveSmart.git)
