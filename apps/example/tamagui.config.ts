
import {createTamagui} from "tamagui";
import {gdsThemeConfig} from "@gds/components/dist/tamagui.config";


export const config = createTamagui(gdsThemeConfig);

// now, make your types flow nicely back to your `tamagui` import:
type GdsConfig = typeof config

declare module 'tamagui' {
    interface TamaguiCustomConfig extends GdsConfig {}
}