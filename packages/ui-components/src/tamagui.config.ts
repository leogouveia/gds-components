import {defaultConfig} from '@tamagui/config/v4'

export const gdsThemeConfig = {
    ...defaultConfig,
    media: {
        ...defaultConfig.media,
        // add your own media queries here, if wanted
    },
    settings: {
        ...defaultConfig.settings,
        onlyAllowShorthands: false
    },
}
