# Contact Management System + Graph + Map
The webapp has been builded as the requirments shown in task documents

# Technologies Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB),![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white),![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white),![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white),![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white),![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

- Redux Toolkit - Used for state managment of contacts
- React Query - Used for fetching data from api used in this projects only in maps & graph page

# Routes
 - **'/'** - Route used for Contact Managment System
- **'/analysis'** - Route used for Map & Graph


# Installing

Step 1: Clone the Repository
  Clone the repository using git command or manually download it
 `git clone https://github.com/[YourUsername]/[RepositoryName].git`
 
Step 2: Navigate to the Project Directory
   Change your current directory to the project directory:
   `cd cms`
   
Step 3: Install Dependencies

Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from nodejs.org.
Install project dependencies by running the following command:
 `npm install`
 
Step 4: Start the Development Server
After the dependencies are installed, you can start the development server using Vite. Use the following command:
bash
`npm run dev`

Step 5: Go to WebPage
Launch Web Browser and navigate to `http://127.0.0.1:5173`


# Api Endpoints
   For Graph Data - `https://disease.sh/v3/covid-19/all`
   
   For Map Data By Country - `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
