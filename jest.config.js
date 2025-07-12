export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // svg, png 등 static 파일 무시
    "\\.(jpg|jpeg|png|gif)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(svg\\?react)$": "<rootDir>/__mocks__/fileMock.js",
    // css, scss 등 무시
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    // alias 경로 지원
    "^@_assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@_components/(.*)$": "<rootDir>/src/components/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
