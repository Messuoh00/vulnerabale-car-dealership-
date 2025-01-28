
Below is a sample `README.md` file for the **Vulnerable Car Dealership** project hosted on GitHub. This file provides an overview of the project, its purpose, setup instructions, and other relevant details.

---

# Vulnerable Car Dealership


The **Vulnerable Car Dealership** is a deliberately insecure web application designed for educational purposes. It simulates a car dealership platform where users can browse, buy, and sell cars. The application is intentionally built with vulnerabilities to help developers, security researchers, and students learn about common web application security issues and how to mitigate them.

---

## Features
- User registration and login functionality.
- Browse and search for cars.
- Add, edit, and delete car listings (for authorized users).
- Simulated payment system.
- Admin panel for managing users and cars.
- Deliberately implemented vulnerabilities for educational purposes.

---

## Purpose
This project is designed to:
- Provide a safe environment for learning about web application security.
- Demonstrate common vulnerabilities and their impact.
- Help developers understand how to secure web applications effectively.

---

## Installation
To set up the Vulnerable Car Dealership locally, follow these steps:

### Prerequisites
- Node.js (version 16 or higher)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Messuoh00/vulnerabale-car-dealership-.git
   cd vulnerabale-car-dealership-
   ```

2. **Install dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Create a MongoDB database (local or cloud-based).
   - Update the `.env` file with your MongoDB connection string:
     ```env
     MONGO_URI=mongodb://localhost:27017/car-dealership
     PORT=3000
     ```
   - Replace `mongodb://localhost:27017/car-dealership` with your actual MongoDB connection string.

4. **Run the application**:
   Start the application using the following command:
   ```bash
   npm run devstart
   ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## Usage
- Register a new user account or use the default admin credentials (if provided).
- Explore the car dealership features and attempt to identify vulnerabilities.
- Use the application responsibly and only in a controlled environment.

---

## Vulnerabilities
This project intentionally includes the following vulnerabilities for educational purposes:
- **SQL Injection**: Poorly sanitized user inputs in search and login functionalities.
- **Cross-Site Scripting (XSS)**: Unsanitized user inputs in car descriptions and comments.
- **Cross-Site Request Forgery (CSRF)**: Lack of anti-CSRF tokens in forms.
- **Broken Authentication**: Weak password policies and session management.
- **Insecure Direct Object References (IDOR)**: Unrestricted access to car listings and user data.

**Note**: These vulnerabilities are intentionally included for learning purposes. Do not deploy this application in a production environment.



## screenshots



![image](https://github.com/user-attachments/assets/8888b4c5-8d0c-4384-82d6-a3a1437abbeb)
![image](https://github.com/user-attachments/assets/ca36edc9-f04b-4536-b778-ed602ae82000)
![image](https://github.com/user-attachments/assets/80cb9972-33d2-4d28-9432-4511774fcb71)
![image](https://github.com/user-attachments/assets/4e26f6b7-d106-4670-8b16-676b75c30680)
![image](https://github.com/user-attachments/assets/6dd4ce4c-94aa-492e-8efd-6645ae019b1c)
