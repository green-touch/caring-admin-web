# Caring Admin Web API

이 문서는 Caring Admin Web 프로젝트의 API 구조와 사용법을 설명합니다.

## 📁 폴더 구조

```
src/api/
├── constants/
│   └── queryKeys.ts          # 쿼리 키 상수
├── hooks/
│   ├── useManagerApi.ts      # Manager API 훅
│   ├── useUserApi.ts         # User API 훅
│   └── index.ts              # 훅 인덱스
├── manager/
│   ├── index.ts              # Manager API 함수
│   └── queries.ts            # Manager 쿼리 함수
├── user/
│   ├── index.ts              # User API 함수
│   └── queries.ts            # User 쿼리 함수
├── instance.ts               # API 인스턴스 (JWT 토큰 관리)
└── index.ts                  # 메인 인덱스
```

## 🚀 사용법

### 1. 기본 설정

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useManagerApi, useUserApi } from './api';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  );
}
```

### 2. Manager API 사용

```typescript
import { useManagerApi } from './api';

function ManagerComponent() {
  const { useManagerProfile, useLoginManager } = useManagerApi();

  // 매니저 프로필 조회
  const { data: profile, isLoading } = useManagerProfile('manager123');

  // 매니저 로그인
  const loginMutation = useLoginManager();

  const handleLogin = () => {
    loginMutation.mutate({
      memberCode: 'manager123',
      password: 'password123'
    });
  };

  return (
    <div>
      {isLoading ? '로딩 중...' : profile?.responseManager.name}
    </div>
  );
}
```

### 3. User API 사용

```typescript
import { useUserApi } from './api';

function UserComponent() {
  const { useUserProfile, useLoginUser } = useUserApi();

  // 유저 프로필 조회
  const { data: profile, isLoading } = useUserProfile('user123');

  // 유저 로그인
  const loginMutation = useLoginUser();

  const handleLogin = () => {
    loginMutation.mutate({
      memberCode: 'user123',
      password: 'password123'
    });
  };

  return (
    <div>
      {isLoading ? '로딩 중...' : profile?.name}
    </div>
  );
}
```

## 📋 API 목록

### Manager API

#### Queries

- `useManagerProfile(managerCode)` - 매니저 프로필 정보 조회
- `useSuperAuth()` - super 권한 enum 조회
- `useManagerAccounts()` - 매니저 계정 목록 조회 (개발용)
- `useManagerHealthCheck()` - 서버 상태 확인
- `useManagerWelcome()` - 환영 메시지

#### Mutations

- `useRegisterShelter()` - 보호소 등록
- `useRegisterDefaultManager()` - 일반 매니저 계정 생성
- `useRegisterSuperManager()` - super 권한 매니저 생성 (테스트용)
- `useLoginManager()` - 매니저 로그인
- `useSwitchSuperAuth()` - 매니저 권한 조정
- `useEditManagerInformation()` - 매니저 프로필 정보 수정

### User API

#### Queries

- `useUserProfile(memberCode)` - 특정 유저 계정 조회
- `useMyInfo(memberCode)` - 내 정보 조회 (홈 화면 X)
- `useHomeInfo(memberCode)` - 경량화된 내 정보 조회 (홈 화면 O)
- `useUserShelterUuid(userUuid)` - 유저 shelterUuid 조회
- `useAllUsers()` - 모든 유저 목록 조회
- `useUserHealthCheck()` - 서버 상태 확인
- `useUserWelcome()` - 환영 메시지

#### Mutations

- `useRegisterUser()` - 새로운 유저 등록
- `useLoginUser()` - 유저 로그인
- `useFindMyMemberCode()` - 핸드폰 인증으로 memberCode 조회
- `useResetPassword()` - 비밀번호 재설정
- `useSaveEmergencyContacts()` - 비상연락망 추가

## 🔐 JWT 토큰 관리

API 인스턴스는 자동으로 JWT 토큰을 관리합니다:

```typescript
import { tokenManager } from "./api";

// 토큰 설정 (로그인 성공 후)
tokenManager.setTokens(accessToken, refreshToken);

// 인증 상태 확인
const isAuthenticated = tokenManager.isAuthenticated();

// 토큰 삭제 (로그아웃)
tokenManager.clearTokens();
```

## 🎯 타입 안전성

모든 API는 Zod 스키마를 기반으로 한 타입 안전성을 제공합니다:

```typescript
import type { ManagerProfileResponse, UserProfileResponse } from "./api";

// 타입이 자동으로 추론됩니다
const { data: profile } = useManagerProfile("manager123");
// profile의 타입: ManagerProfileResponse
```

## 🔄 쿼리 무효화

Mutation 성공 후 관련 쿼리가 자동으로 무효화됩니다:

```typescript
const editMutation = useEditManagerInformation();

editMutation.mutate({
  managerCode: "manager123",
  editManagerInform: {
    email: "new@email.com",
    phoneNumber: "010-1234-5678",
  },
});
// 성공 시 managerKeys.profile('manager123') 쿼리가 자동으로 무효화됨
```

## 🛠️ 개발 도구

React Query DevTools를 사용하여 쿼리 상태를 모니터링할 수 있습니다:

```typescript
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <>
      <YourApp />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
```
