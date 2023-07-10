# CIS Court Booking System
This is a [Next.js](https://nextjs.org/) app direcotry project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About the Project
The core objective of this project is to rewrite the Court Booking System from scratch using Next.js 13 and React 18 along with Tailwind. 

This is a Spring MVC application which was written in Java, had become obsolete due to deprecated dependencies. The system, which was originally developed by me and my team as our final project for graduation, Court Booking System is a web application designed for a fitness court center that offers courts available for booking. It enables members to effortlessly schedule and reserve available courts in advance, simplifying the process of planning and organizing their activities.

## Getting Started

**1. Clone the repository and install dependencies**

```bash
git clone https://github.com/asheikho99/project-b.git
cd project-b
npm install
```

**2. Run the development server:**

```bash
npm run dev
```

**3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## Roadmap

- Web Application
    - [ ] Fitness Member CRUD
    - [ ] Court CRUD
    - [ ] Booking a Court
    - [ ] Restrict booking to busienss hours only
- File I/O
    - [ ] Save Fitness Members to File
    - [ ] Save Court Information to File
    - [ ] CourtBooking File Export
- Reports
    - [ ] Fitness Members Bookings
    - [ ] Show Available Courts
    - [ ] Fitness Member Usage Report
- Web Services
    - [ ] Fitness Member Service
    - [ ] Court Service
    - [ ] Booking Service
- Others
    - [x] User auth using [NextAuth](https://next-auth.js.org/)
    - [x] Theme Switching
    - [x] Markdown to JSX content parser

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Shadcn UI Library](https://ui.shadcn.com) - Beautifully designed components that you can copy and paste into your apps

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
