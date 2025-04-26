import { streamText } from 'ai';
import { openROuter } from '../lib/ai';
export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openROuter('meta-llama/llama-4-maverick:free'),
      prompt,
    });
    return result.textStream;
  },
};
