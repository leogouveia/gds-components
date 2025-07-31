import {
    ColorTokens,
    createStyledContext,
    FontSizeTokens,
    Input as TInput,
    isWeb,
    Label,
    styled,
    View,
    withStaticProperties,
    XGroup,
} from "tamagui";
import {useState} from "react";
import {getFontSized} from "@tamagui/get-font-sized";

const defaultContextValues = {
    size: '$true' as FontSizeTokens,
    scaleIcon: 1.2,
    color: undefined
}
export const InputContext = createStyledContext<{
    size: FontSizeTokens,
    scaleIcon: number,
    color?: ColorTokens | string
}>(defaultContextValues)

export const defaultInputGroupStyles = {
    size: '$true',
    fontFamily: '$body',
    borderWidth: 1,
    outlineWidth: 0,
    color: '$color',

    ...(isWeb
        ? {
            tabIndex: 0,
        }
        : {
            focusable: true,
        }),

    borderColor: '$borderColor',
    backgroundColor: '$color2',

    // this fixes a flex bug where it overflows container
    minWidth: 0,

    hoverStyle: {
        borderColor: '$borderColorHover',
    },

    focusStyle: {
        outlineColor: '$outlineColor',
        outlineWidth: 2,
        outlineStyle: 'solid',
        borderColor: '$borderColorFocus',
    },
} as const

const InputGroupFrame = styled(XGroup, {
    justifyContent: 'space-between',
    context: InputContext,
    variants: {
        unstyled: {
            false: defaultInputGroupStyles,
        },
        scaleIcon: {
            ':number': {} as any,
        },
        applyFocusStyle: {
            ':boolean': (val, {props}) => {
                if (val) {
                    return props.focusStyle || defaultInputGroupStyles.focusStyle
                }
            }
        },
        size: {
            '...size': (val, {tokens}) => {
                return {
                    borderRadius: tokens.radius[val as keyof typeof tokens.radius]
                }
            }
        }
    } as const,
    defaultVariants: {
        unstyled: process.env.TAMAGUI_UNSTYLED === '1'
    }
})

const FocusContext = createStyledContext({
    setFocused: (val: boolean) => {
    },
    focused: false,
})

const InputGroupImpl = InputGroupFrame.styleable((props, forwardedRef) => {
    const {children, ...rest} = props;
    const [focused, setFocused] = useState(false);

    return (
        <FocusContext.Provider focused={focused} setFocused={setFocused}>
    <InputGroupFrame applyFocusStyle={focused} ref={forwardedRef} {...rest}>
    {children}
    </InputGroupFrame>
    </FocusContext.Provider>
)
})

export const InputContainerFrame = styled(View, {
    context: InputContext,
    flexDirection: 'column',
    variants: {
        size: {
            '...size': (val: string | number | symbol, {tokens}: any) => {
                return {
                    gap: tokens.space[val as keyof typeof tokens.space] * 0.3,
                }
            }
        },
        color: {
            '...color': () => ({}),
        },
        gapScale: {
            ':number': {} as any
        }
    } as const,
    defaultVariants: {
        size: '$4'
    }
})

const InputFrame = styled(TInput, {
    unstyled: true,
    context: InputContext,
})

const InputImpl = InputFrame.styleable((props, ref) => {
    const {setFocused} = FocusContext.useStyledContext();
    const {size} = InputContext.useStyledContext();
    const {...rest} = props;
    return (
        <View flex={1}>
        <InputFrame ref={ref} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
    size={size} {...rest} />

    </View>
)
})

const InputSection = styled(XGroup.Item, {
    justifyContent: 'center',
    alignItems: 'center',
    context: InputContext,
})

export const InputLabel = styled(Label, {
    context: InputContext,
    variants: {
        size: {
            '...fontSize': getFontSized as any
        }
    } as const,
})

export const Input = withStaticProperties(InputContainerFrame, {
    Box: InputGroupImpl,
    Area: InputImpl,
    Section: InputSection,
    Label: InputLabel
})