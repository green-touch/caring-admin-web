import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '~/pages/loginsPage';
import MainScreen from '~/pages/MainScreen';
import MyInfoPage from '~/pages/MyinfoPage';
import IndexPage from './pages/IndexPage'; 
import UserAccountPage from './pages/UserAccounScreen';
import SOSHistoryPage from './pages/SosHistoryPage';
import SosTimelinePage from './pages/SosTimelinePage';
import UserMonitoringPage from './pages/UserMonitoringPage';
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
