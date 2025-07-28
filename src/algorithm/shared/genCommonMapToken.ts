import type { SeedToken } from '../types';

export default function genCommonMapToken(
  token: SeedToken,
): Record<string, string> {
  return {
    motionDurationFast: token.motionDurationFast || '0.1s',
    motionDurationMid: token.motionDurationMid || '0.2s',
    motionDurationSlow: token.motionDurationSlow || '0.3s',
    motionEaseInOut:
      token.motionEaseInOut || 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOut: token.motionEaseOut || 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseIn:
      token.motionEaseIn || 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    motionEaseInBack:
      token.motionEaseInBack || 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    motionEaseOutBack:
      token.motionEaseOutBack || 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };
}
