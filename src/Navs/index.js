import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Landingpage from "../components/Landingpage";
import Auth from "../components/Auth";
import CandidateJobs from "../components/candidate/Jobs";
import CandidateProfile from "../components/candidate/Profile";
import CandidateOnboarding from "../components/candidate/Onboarding";
import CandidateApplications from "../components/candidate/Applications";
import CandidateConversation from "../components/candidate/Conversation";
import TopBar from "../components/common/Topbar";
import EmployerJobs from "../components/employer/Jobs";
import EmployerProfile from "../components/employer/Profile";
import EmployerOnboarding from "../components/employer/Onboarding";
import EmployerApplicants from "../components/employer/Applicants";
import EmployerConversation from "../components/employer/Conversation";

function Navs() {
  const Candidateprotected = () => {
    const pages = [
      {
        title: "Jobs",
        path: "/candidate/jobs",
      },
      {
        title: "Profile",
        path: "/candidate/profile",
      },
      {
        title: "Conversation",
        path: "/candidate/conversation",
      },
      {
        title: "Applications",
        path: "/candidate/applications",
      },
    ];
    return (
      <div>
        <TopBar pages={pages} />
        <div
        style={{
          marginTop: '70px',
        }}
        >  <Outlet /></div>
      
      </div>
    );
  };
  const EmployerProtected = () => {
    const pages = [
      {
        title: "Jobs",
        path: "/employer/jobs",
      },
      {
        title: "Profile",
        path: "/employer/profile",
      },
      {
        title: "Conversation",
        path: "/employer/conversation",
      },
      {
        title: "Applicants",
        path: "/employer/applicants",
      },
    ];
    return (
      <div>
        <TopBar pages={pages} />
        <div
        style={{
          marginTop: '70px',
        }}
        >
             <Outlet />
        </div>
     
      </div>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/employer/auth" element={<Auth usertype={"employer"} />} />
        <Route
          path="/candidate/auth"
          element={<Auth usertype={"candidate"} />}
        />
          <Route
            path="/candidate/onboarding"
            element={<CandidateOnboarding />}
          />
        <Route element={<Candidateprotected />}>
          <Route path="/candidate/jobs" element={<CandidateJobs />} />
          <Route path="/candidate/profile" element={<CandidateProfile />} />
        
          <Route
            path="/candidate/applications"
            element={<CandidateApplications />}
          />
          <Route
            path="/candidate/conversation"
            element={<CandidateConversation />}
          />
        </Route><Route path="/employer/onboarding" element={<EmployerOnboarding />} />
        <Route element={<EmployerProtected />}>
          <Route path="/employer/jobs" element={<EmployerJobs />} />
          <Route path="/employer/profile" element={<EmployerProfile />} />
          
          <Route path="/employer/applicants" element={<EmployerApplicants />} />
          <Route
            path="/employer/conversation"
            element={<EmployerConversation />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Navs;

// 1. define Router Components
// this will store mapping between URL and Component
