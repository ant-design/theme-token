import type { SeedToken } from '../types';

export default function genControlHeight(
  token: SeedToken,
): Record<string, number> {
  return {
    controlHeight: token.controlHeight || 32,
    controlHeightSM: token.controlHeightSM || 24,
    controlHeightLG: token.controlHeightLG || 40,
  };
}
