import { lazy } from "react";

/* eslint-disable react-refresh/only-export-components */
const Home = lazy(() => import("../page/home"));
const About = lazy(() => import("../page/about"));
const Contact = lazy(() => import("../page/contact"));
const Sell = lazy(() => import("../page/services/sell"));
const Industrial = lazy(() => import("../page/services/industrial"));
const Buy = lazy(() => import("../page/services/buy"));
const SellPage = lazy(() => import("../page/sell"));
const JoinUsPage = lazy(() => import("../page/joinUs"));
export const baseUrl = "";

export const routes = [
  { path: `${baseUrl}/`, element: <Home />, needsAuth: false },
  { path: `${baseUrl}/sell-buy`, element: <SellPage />, needsAuth: false },
  { path: `${baseUrl}/about-us`, element: <About />, needsAuth: false },
  { path: `${baseUrl}/contact-us`, element: <Contact />, needsAuth: false },
  { path: `${baseUrl}/sell-your-vehicle`, element: <Sell />, needsAuth: false },
  {
    path: `${baseUrl}/industrial-strap`,
    element: <Industrial />,
    needsAuth: false,
  },
  { path: `${baseUrl}/buy-vehicle-parts`, element: <Buy />, needsAuth: false },
  { path: `${baseUrl}/join-us`, element: <JoinUsPage />, needsAuth: false },
];
