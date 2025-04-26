import { createOpenRouter } from '@openrouter/ai-sdk-provider';

export const openROuter = createOpenRouter({
  apiKey: import.meta.env.VITE_API_KEY,
});
