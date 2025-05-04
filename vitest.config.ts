import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,           // describe/test をグローバル利用
    environment: 'node',     // Node.js 環境
    include: ['test/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['src/routes/generated_*'] // 自動生成コードはカバレッジ除外
    }
  }
});
