
import Footer from '@_components/common/footor';
import Header from '@_components/common/header';
import Sidebar from '@_components/common/sidebar';
import { Outlet } from 'react-router-dom';


export default function MainScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <Outlet /> 
        </div>
      </div>
      <Footer />
    </div>
  );
}
