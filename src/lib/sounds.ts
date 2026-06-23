import { defineSound } from '@web-kits/audio';
import { swoosh, copy, success, error, click, hover, expand } from '@/audio/soft';

export const sounds = {
  swoosh:  defineSound(swoosh),
  copy:    defineSound(copy),
  success: defineSound(success),
  error:   defineSound(error),
  click:   defineSound(click),
  hover:   defineSound(hover),
  chime:   defineSound(expand),
};
