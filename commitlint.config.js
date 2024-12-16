module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build", // 빌드 시스템, 외부 라이브러리 업데이트 등
        "chore", // 잡다한 작업 (코드와 무관한 설정 등)
        "ci", // CI/CD 관련 변경
        "docs", // 문서화 관련 작업
        "feat", // 새로운 기능 추가
        "fix", // 버그 수정
        "refactor", // 코드 리팩토링
        "revert", // 이전 커밋 되돌리기
        "style", // 코드 스타일 개선
        "test", // 테스트 코드 추가 또는 수정
        "design", // UI/UX 디자인 변경
      ],
    ],
  },
};
