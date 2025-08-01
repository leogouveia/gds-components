import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from 'tamagui';

export const gdsThemeConfig = {
  ...defaultConfig,
  media: {
    ...defaultConfig.media,
    // add your own media queries here, if wanted
  },
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
};

export const gdsConfig = createTamagui(gdsThemeConfig);

// now, make your types flow nicely back to your `tamagui` import:
type GdsConfig = typeof gdsConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends GdsConfig {}
}
