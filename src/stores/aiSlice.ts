import { StateCreator } from 'zustand';
import AIservices from '../services/AIservices';

export type AISliceType = {
  recipe: string;
  isGenerating: boolean;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISliceType> = (set) => ({
  recipe: '',
  isGenerating: false,
  generateRecipe: async (prompt) => {
    set({
      isGenerating: true,
    });
    set({
      recipe: '',
    });
    const data = await AIservices.generateRecipe(prompt);

    for await (const textPart of data) {
      set((state) => ({
        recipe: state.recipe + textPart,
      }));
    }
    set({
      isGenerating: false,
    });
  },
});
