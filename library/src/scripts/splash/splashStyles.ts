/**
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { globalVariables } from "@library/styles/globalStyleVars";
import { styleFactory, useThemeCache, variableFactory } from "@library/styles/styleUtils";
import { formElementsVariables } from "@library/forms/formElementStyles";
import { BackgroundColorProperty, FontWeightProperty, PaddingProperty, TextShadowProperty } from "csstype";
import { important, percent, px, quote, translateX } from "csx";
import {
    centeredBackgroundProps,
    colorOut,
    fonts,
    getBackgroundImage,
    IBackground,
    IFont,
    modifyColorBasedOnLightness,
    paddings,
    unit,
    background,
    absolutePosition,
    borders,
} from "@library/styles/styleHelpers";
import { transparentColor, IButtonType, generateButtonClass } from "@library/forms/buttonStyles";
import { assetUrl } from "@library/utility/appUtils";
import { TLength } from "typestyle/lib/types";
import { widgetVariables } from "@library/styles/widgetStyleVars";
import { searchBarClasses } from "@library/features/search/searchBarStyles";

export const splashVariables = useThemeCache(() => {
    const makeThemeVars = variableFactory("splash");
    const globalVars = globalVariables();
    const widgetVars = widgetVariables();
    const formElVars = formElementsVariables();

    const topPadding = 69;
    const spacing = makeThemeVars("spacing", {
        padding: {
            top: topPadding as PaddingProperty<TLength>,
            bottom: (topPadding * 0.8) as PaddingProperty<TLength>,
            right: unit(widgetVars.spacing.inner.horizontalPadding + globalVars.gutter.quarter) as PaddingProperty<
                TLength
            >,
            left: unit(widgetVars.spacing.inner.horizontalPadding + globalVars.gutter.quarter) as PaddingProperty<
                TLength
            >,
        },
    });

    // Main colors
    const colors = makeThemeVars("colors", {
        primary: globalVars.mainColors.primary,
        secondary: globalVars.mainColors.secondary,
        contrast: globalVars.elementaryColors.white,
        input: globalVars.mainColors.fg,
    });

    const outerBackground: IBackground = makeThemeVars("outerBackground", {
        color: colors.primary,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        image: assetUrl("/resources/design/fallbackSplashBackground.svg"),
        fallbackImage: assetUrl("/resources/design/fallbackSplashBackground.svg"),
    });

    const innerBackground = makeThemeVars("innerBackground", {
        bg: undefined,
        padding: {
            top: spacing.padding,
            right: spacing.padding,
            bottom: spacing.padding,
            left: spacing.padding,
        },
    });

    const text = makeThemeVars("text", {
        shadowMix: 1, // We want to get the most extreme lightness contrast with text color (i.e. black or white)
        innerShadowOpacity: 0.25,
        outerShadowOpacity: 0.75,
    });

    const title = makeThemeVars("title", {
        maxWidth: 700,
        font: {
            color: colors.contrast,
            size: globalVars.fonts.size.title,
            weight: globalVars.fonts.weights.semiBold as FontWeightProperty,
            align: "center",
            shadow: `0 1px 1px ${colorOut(
                modifyColorBasedOnLightness(colors.contrast, text.shadowMix).fade(text.innerShadowOpacity),
            )}, 0 1px 25px ${colorOut(
                modifyColorBasedOnLightness(colors.contrast, text.shadowMix).fade(text.outerShadowOpacity),
            )}` as TextShadowProperty,
        },
        marginTop: 28,
        marginBottom: 40,
        text: "How can we help you?",
    });

    const border = makeThemeVars("border", {
        color: colors.contrast,
    });

    const searchContainer = makeThemeVars("searchContainer", {
        width: 670,
    });

    const paragraph = makeThemeVars("paragraph", {
        margin: ".4em",
        text: {
            size: 24,
            weight: 300,
        },
    });

    const search = makeThemeVars("search", {
        margin: 30,
        fg: colors.contrast,
        bg: colors.contrast,
    });

    const searchDrawer = makeThemeVars("searchDrawer", {
        bg: colors.contrast,
    });

    const searchBar = makeThemeVars("searchBar", {
        sizing: {
            height: formElVars.giantInput.height,
            width: 705,
        },
        font: {
            color: colors.input,
            size: formElVars.giantInput.fontSize,
        },
        border: {
            leftColor: colors.input.fade(0.4),
            radius: globalVars.border.radius,
        },
    });

    const shadow = makeThemeVars("shadow", {
        color: modifyColorBasedOnLightness(colors.contrast, text.shadowMix).fade(0.05),
        full: `0 1px 15px ${colorOut(modifyColorBasedOnLightness(colors.contrast, text.shadowMix).fade(0.3))}`,
        background: modifyColorBasedOnLightness(colors.contrast, text.shadowMix).fade(0.1) as BackgroundColorProperty,
    });

    const searchButtonType: IButtonType = makeThemeVars("buttonTypeSplash", {
        spinnerColor: colors.contrast,
        colors: {
            bg: colors.contrast,
        },
        borders: {
            color: transparentColor,
            width: 0,
        },
        fonts: {
            color: colors.input,
            size: globalVars.fonts.size.large,
            weight: globalVars.fonts.weights.semiBold,
        },
        hover: {
            colors: {
                fg: colors.contrast,
                bg: colors.secondary,
            },
            borders: {
                color: colors.secondary,
            },
            fonts: {
                color: colors.contrast,
            },
        },
        active: {
            colors: {
                fg: colors.contrast,
                bg: colors.secondary,
            },
            borders: {
                color: colors.secondary,
            },
            fonts: {
                color: colors.contrast,
            },
        },
        focus: {
            colors: {
                fg: colors.contrast,
                bg: colors.secondary,
            },
            borders: {
                color: colors.secondary,
            },
            fonts: {
                color: colors.contrast,
            },
        },
        focusAccessible: {
            colors: {
                fg: colors.contrast,
                bg: colors.secondary,
            },
            borders: {
                color: colors.secondary,
            },
            fonts: {
                color: colors.contrast,
            },
        },
    });

    const searchButton = makeThemeVars("searchButton", {
        borderRadius: searchBar.border.radius,
    });

    return {
        outerBackground,
        spacing,
        border,
        searchContainer,
        innerBackground,
        text,
        title,
        paragraph,
        search,
        searchDrawer,
        searchBar,
        shadow,
        searchButtonType,
        searchButton,
        colors,
    };
});

export const splashStyles = useThemeCache(() => {
    const vars = splashVariables();
    const style = styleFactory("splash");
    const formElementVars = formElementsVariables();
    const globalVars = globalVariables();

    const root = style({
        position: "relative",
        backgroundColor: colorOut(vars.outerBackground.color),
    });

    const image = getBackgroundImage(vars.outerBackground.image, vars.outerBackground.fallbackImage);
    const outerBackground = (url?: string) => {
        return style("outerBackground", {
            ...centeredBackgroundProps(),
            display: "block",
            position: "absolute",
            top: px(0),
            left: px(0),
            width: percent(100),
            height: percent(100),
            ...background(url ? { ...vars.outerBackground, image: url } : vars.outerBackground),
            opacity:
                !url && (vars.outerBackground.fallbackImage && image === vars.outerBackground.fallbackImage)
                    ? 0.4
                    : undefined,
        });
    };

    const innerContainer = style("innerContainer", {
        ...paddings(vars.spacing.padding),
        backgroundColor: vars.innerBackground.bg,
    });

    const title = style("title", {
        display: "block",
        ...fonts(vars.title.font as IFont),
        ...paddings({
            top: unit(vars.title.marginTop),
            bottom: unit(vars.title.marginBottom),
        }),
        flexGrow: 1,
    });

    const text = style("text", {
        color: colorOut(vars.colors.contrast),
    });

    const searchButton = generateButtonClass(vars.searchButtonType, "splashSearchButton");

    const valueContainer = style("valueContainer", {
        $nest: {
            [`&, &.${searchBarClasses().valueContainer}`]: {
                ...borders({
                    color: vars.colors.contrast,
                    radius: {
                        right: 0,
                        left: vars.searchBar.border.radius,
                    },
                }),
            },
        },
    });

    const buttonOverwrite = style("buttonOverwrite", {
        color: vars.colors.input,
        $nest: {
            [`&, &.${searchBarClasses().actionButton}`]: {
                ...borders({
                    left: {
                        color: vars.searchBar.border.leftColor,
                    },
                    radius: {
                        right: vars.searchButton.borderRadius,
                        left: 0,
                    },
                }),
            },
        },
    } as any);

    const searchContainer = style("searchContainer", {
        position: "relative",
        maxWidth: percent(100),
        width: px(vars.searchContainer.width),
        margin: "auto",
        $nest: {
            ".search-results": {
                maxWidth: percent(100),
                width: px(vars.searchContainer.width),
                margin: "auto",
            },
        },
    });

    const icon = style("icon", {});
    const input = style("input", {});

    const buttonLoader = style("buttonLoader", {});

    const titleAction = style("titleAction", {
        // color: colorOut(vars.colors.fg),
    });
    const titleWrap = style("titleWrap", {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        width: unit(vars.searchContainer.width),
        maxWidth: percent(100),
        margin: "auto",
    });

    const titleFlexSpacer = style("titleFlexSpacer", {
        position: "relative",
        height: unit(formElementVars.sizing.height),
        width: unit(formElementVars.sizing.height),
        flexBasis: unit(formElementVars.sizing.height),
        transform: translateX(px(formElementVars.sizing.height - globalVars.icon.sizes.default / 2 - 13)),
        $nest: {
            ".searchBar-actionButton:after": {
                content: quote(""),
                ...absolutePosition.middleOfParent(),
                width: px(20),
                height: px(20),
                backgroundColor: colorOut(vars.shadow.background),
                boxShadow: vars.shadow.full,
            },
            ".searchBar-actionButton": {
                color: important("inherit"),
                $nest: {
                    "&:not(.focus-visible)": {
                        outline: 0,
                    },
                },
            },
            ".icon-compose": {
                zIndex: 1,
            },
        },
    });

    const content = style("content", {
        $nest: {
            "&&.hasFocus .searchBar-valueContainer": {
                borderColor: colorOut(vars.colors.contrast),
                boxShadow: `0 0 0 ${unit(globalVars.border.width)} ${colorOut(vars.colors.primary)} inset`,
                zIndex: 1,
            },
        },
    });

    return {
        root,
        outerBackground,
        innerContainer,
        title,
        text,
        icon,
        buttonOverwrite,
        searchButton,
        searchContainer,
        input,
        buttonLoader,
        titleAction,
        titleFlexSpacer,
        titleWrap,
        content,
        valueContainer,
    };
});
