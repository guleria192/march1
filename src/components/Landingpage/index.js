import React from 'react'
import TopBar from '../common/Topbar';
import RightJobSection from './RightJobSection';
import OnePlatform from './OnePlatform'
import AllCandidates from './AllCandidates';
import Footer from './Footer';
import './landingpage.css';
function Landingpage() {
  const pages = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title:'Find Jobs',
      path:'/candidate/auth'
    },
    {
      title:'Find Candidates',
      path:'/employer/auth'
    }
  ];
  return (
    <div>
      <TopBar
      pages={pages}
      />
      <RightJobSection />
      <OnePlatform />
      <AllCandidates />
      <Footer />
    </div>
  )
}

export default Landingpage