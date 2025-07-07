import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '@_pages/loginsPage';
import MainScreen from '@_pages/MainScreen';
import MyInfoPage from '@_pages/MyinfoPage';
import IndexPage from '@_pages/IndexPage'; 
import UserAccountPage from '@_pages/UserAccounScreen';
import SOSHistoryPage from '@_pages/SosHistoryPage';
import SosTimelinePage from '@_pages/SosTimelinePage';
import UserMonitoringPage from '@_pages/UserMonitoringPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainScreen />}>
          <Route index element={<IndexPage />} /> 
          <Route path="my-info" element={<MyInfoPage />} />
          <Route path="user-account" element={<UserAccountPage />} /> 
           <Route path="user-monitoring" element={<UserMonitoringPage />} />
          <Route path="sos-history" element={<SOSHistoryPage />} />
          <Route path="sos-timeline" element={<SosTimelinePage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
