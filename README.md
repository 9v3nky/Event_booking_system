# 🎉 Event Booking System

A full-stack web application that allows users to book events in their preferred categories. Admins can create daily slots between 9 AM to 6 PM, ensuring no overlapping within the same category. Users can then book available slots based on their preferences.

---

## 🧩 Tech Stack

- **Frontend:** Angular (Standalone components, Angular Material)
- **Backend:** Django + Django REST Framework
- **Authentication:** JWT-based authentication
- **Database:** SQLite (for development purposes)

---

## 📦 Features

### 🔐 Authentication & Authorization
- User registration and login with JWT tokens
- Role-based dashboards for Admins and Users
- Protected routes (both frontend and backend)
- Global HTTP interceptor for JWT token injection in requests

### 👨‍💼 Admin Features
- **User Management:** Promote/demote users to/from admin
- **Category Management:** Create, update, soft-delete categories
- **Calendar Management:**
  - View all created time slots per category
  - Create, update, and delete time slots
  - Prevent overlapping slots for the same category, date, and time

### 👤 User Features
- **Preference Management:** Add, update, or remove category preferences (only active categories)
- **Calendar:**
  - View slots based on preferred categories
  - Subscribe/unsubscribe to available slots
  - Restriction on editing or booking past slots

### 💅 UI/UX
- Responsive and modern UI using Angular Material
- Use of modals and snackbars for a smooth user experience

---

## 🛠️ Setup Instructions

### 🚀 Backend (Django)

1. **Clone the repository and navigate to the backend folder:**

   ```bash
   git clone https://github.com/9v3nky/Eventy_Booking_System.git
   cd Eventy_Booking_System/event_booking_backend
   ```

2. **Create and activate a virtual environment:**

   ```bash
   python -m venv env
   # On Windows
   env\Scripts\activate
   # On Linux/macOS
   source env/bin/activate
   ```

3. **Install the required dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations and run the server:**

   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

5. **(Optional) Populate the database with dummy data:**

   ```bash
   python manage.py generate_dummy_data
   ```

---

### 💻 Frontend (Angular)

**Requirements:**
- **Node.js:** 20.11.0  
- **npm:** 10.2.4  

1. **Navigate to the frontend folder:**

   ```bash
   cd Eventy_Booking_System/event-booking-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   npm install -g @angular/cli
   ```

3. **Run the application:**

   ```bash
   ng serve
   ```

   The frontend will be available at [http://localhost:4200](http://localhost:4200)
