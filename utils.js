import { fileURLToPath } from 'url';

export const dirname = () => {
  return fileURLToPath(new URL('.', import.meta.url));
};
