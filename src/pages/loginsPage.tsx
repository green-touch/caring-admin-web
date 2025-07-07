
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8]">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">로그인 페이지입니다.</h1>
        <button
          onClick={() => navigate('/main')}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          로그인하기
        </button>
      </div>
    </div>
  );
}
