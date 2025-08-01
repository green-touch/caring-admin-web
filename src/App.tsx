import IndexPage from '@_pages/IndexPage';
import LoginPage from '@_pages/LoginPage';
import MainScreen from '@_pages/MainScreen';
import MyInfoPage from '@_pages/MyinfoPage';
import UserAlertListPage from '@_pages/UserAlertListPage';
import SosHistoryPage from '@_pages/SosHistoryPage';
import SosUserDetailPage from '@_pages/SosUserDetailPage';
import SosTimelinePage from '@_pages/SosTimelinePage';
import UserAccountPage from '@_pages/UserAccounScreen';
import UserMonitoringPage from '@_pages/UserMonitoringPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Route path="user-alertlist" element={<UserAlertListPage />} />
          <Route path="sos-history" element={<SosHistoryPage />} />
          <Route path="sos-detail/:id" element={<SosUserDetailPage />} />
          <Route path="sos-timeline" element={<SosTimelinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
