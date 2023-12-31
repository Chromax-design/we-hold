import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { socket } from "./config/socket";

// other pages
import Nav from "./components/Nav/Nav";
import ScrollTop from "./components/ScrollTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Faqs from "./pages/Faqs";
import Info from "./pages/Info";
import Learning from "./pages/Learning";
import Personality from "./pages/Personality";
import Online from "./pages/Online";
import Empowerment from "./pages/Empowerment";
import Collaborate from "./pages/Collaborate";

// signup / register
import MenteeSignup from "./pages/mentees/MenteeSignup";
import Mentorsignup from "./pages/mentors/Mentorsignup";

// login / sign in for both mentors and mentees
import LoginBase from "./pages/LoginBase";

// application
import MenteeApplication from "./pages/mentees/MenteeApplication";
import MentorApplication from "./pages/mentors/MentorApplication";

// password reset
import MentorPasswordreset from "./pages/mentors/MentorPasswordreset";
import MenteePasswordreset from "./pages/mentees/MenteePasswordreset";

// successes
import ActivationSuccess from "./pages/ActivationSuccess";
import UpdateSuccess from "./pages/updateSuccess";

// errors
import Error from "./pages/Error";

import { ToastContainer } from "react-toastify";

// Mentee dashboard
import MenteesDashboard from "./pages/dashboard/mentees/MenteesDashboard";
import MenteeHistory from "./pages/dashboard/mentees/MenteeHistory";
import MenteeNotification from "./pages/dashboard/mentees/MenteeNotification";
import MenteePayments from "./pages/dashboard/mentees/MenteePayments";
import MenteeSettings from "./pages/dashboard/mentees/MenteeSettings";
import { MenteeRoute, MentorRoute } from "../ProtectedRoute";

// mentor dashboard
import MentorsDashboard from "./pages/dashboard/mentors/MentorsDashboard";
import MentorsHistory from "./pages/dashboard/mentors/MentorsHistory";
import MentorNotification from "./pages/dashboard/mentors/MentorNotification";
import MentorPayment from "./pages/dashboard/mentors/MentorPayment";
import MentorSetting from "./pages/dashboard/mentors/MentorSetting";
import Mentors from "./pages/Mentors";
import MentorProfile from "./pages/mentors/MentorProfile";
import Search from "./pages/mentors/Search";
import Error403 from "./pages/Error403";
import useAuth from "./store/AuthStore";
import RemoteJobs from "./pages/RemoteJobs";
import Blog from "./pages/Blog";
import ChatHome from "./components/dashboard/chatHome";
import Chat from "./components/dashboard/Chat";
import StripeSuccess from "./pages/stripeSuccess";
import StripeCancel from "./pages/stripeCancel";
import SearchResults from "./pages/mentors/SearchResults";
import CheckOut from "./pages/CheckOut";
import Payout from "./pages/Payout";
import ConfirmMentor from "./pages/mentors/ConfirmMentor";
import ConfirmMentee from "./pages/mentees/ConfirmMentee";
import MentorResendOtp from "./pages/mentors/MentorResendOtp";
import MenteeResendOtp from "./pages/mentees/MenteeResendOtp";

const Layout = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

const DashboardLayout = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const { user } = useAuth();
  const [chatroom, setChatroom] = useState(
    JSON.parse(localStorage.getItem("chatroom") || null)
  );
  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="info" element={<Info />} />
          <Route path="Learning-Style-Test" element={<Learning />} />
          <Route path="Personality-Test" element={<Personality />} />
          <Route path="Free-online-training" element={<Online />} />
          <Route path="Equip-Youth-Initiative" element={<Empowerment />} />
          <Route path="Collaborate" element={<Collaborate />} />
          <Route path="Remote-jobs" element={<RemoteJobs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="checkout/:userId" element={<CheckOut />} />
          <Route path="payout/:userId" element={<Payout />} />

          <Route path="search/:mentorType" element={<Search />} />
          <Route path="search" element={<SearchResults />} />
          <Route
            path="mentee/application/:userId"
            element={<MenteeApplication />}
          />
          <Route
            path="mentor/application/:userId"
            element={<MentorApplication />}
          />
          <Route path={"mentor/:userId"} element={<MentorProfile />} />
        </Route>

        <Route element={<MenteeRoute />}>
          <Route path="/mentee/dashboard" element={<DashboardLayout />}>
            <Route index element={<MenteesDashboard />} />
            <Route path="history" element={<MenteeHistory />} />
            <Route path="chat" element={<ChatHome role={user?.role} />} />
            <Route path="chatRoom" element={<Chat />} />
            <Route path="notifications" element={<MenteeNotification />} />
            <Route path="payments" element={<MenteePayments />} />
            <Route path="settings" element={<MenteeSettings />} />
          </Route>
        </Route>

        <Route element={<MentorRoute />}>
          <Route path="/mentor/dashboard" element={<DashboardLayout />}>
            <Route index element={<MentorsDashboard />} />
            <Route path="history" element={<MentorsHistory />} />
            <Route path="chat" element={<ChatHome />} />
            <Route path="chatRoom" element={<Chat />} />
            <Route path="notifications" element={<MentorNotification />} />
            <Route path="payments" element={<MentorPayment />} />
            <Route path="settings" element={<MentorSetting />} />
          </Route>
        </Route>

        {/* authentication */}
        <Route path="/auth/signup-as-a-mentee" element={<MenteeSignup />} />
        <Route path="/auth/signup-as-a-mentor" element={<Mentorsignup />} />
        <Route
          path="/auth/mentor/confirm-registration/:userId"
          element={<ConfirmMentor />}
        />
        <Route
          path="/auth/mentee/confirm-registration/:userId"
          element={<ConfirmMentee />}
        />
        <Route
          path="/auth/mentor/resend-otp/:userId"
          element={<MentorResendOtp />}
        />
        <Route
          path="/auth/mentee/resend-otp/:userId"
          element={<MenteeResendOtp />}
        />

        <Route path="/auth/login" element={<LoginBase />} />

        {/* password reset */}
        <Route
          path="/auth/mentor/password-reset"
          element={<MentorPasswordreset />}
        />
        <Route
          path="/auth/mentee/password-reset"
          element={<MenteePasswordreset />}
        />

        {/* Success Routes */}
        <Route path="/auth/signup/success" element={<UpdateSuccess />} />
        <Route path="/auth/passwordUpdate" element={<UpdateSuccess />} />
        <Route path="/verification/success" element={<ActivationSuccess />} />

        <Route path="/stripe/success" element={<StripeSuccess />} />
        <Route path="/stripe/cancel" element={<StripeCancel />} />

        {/* error routes */}
        <Route path="/404" element={<Error />} />
        <Route path="/unauthorized" element={<Error403 />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ScrollTop />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
