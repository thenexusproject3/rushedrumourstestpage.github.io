/*
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { globalVariables } from "@library/styles/globalStyleVars";
import { styleFactory, useThemeCache, variableFactory } from "@library/styles/styleUtils";
import { formElementsVariables } from "@library/forms/formElementStyles";
import { borderRadii, borders, colorOut, unit } from "@library/styles/styleHelpers";
import { calc, important, percent, px } from "csx";
import { titleBarVariables } from "@library/headers/titleBarStyles";
import { buttonClasses, buttonVariables } from "@library/forms/buttonStyles";
import { layoutVariables } from "@library/layout/panelLayoutStyles";
import { shadowHelper } from "@library/styles/shadowHelpers";

export const searchBarVariables = useThemeCache(() => {
    const globalVars = globalVariables();
    const formElementVars = formElementsVariables();
    const themeVars = variableFactory("searchBar");

    const search = themeVars("search", {
        minWidth: 109,
    });

    const sizing = themeVars("sizing", {
        height: 40,
    });

    const placeholder = themeVars("placeholder", {
        color: formElementVars.placeholder.color,
    });

    const heading = themeVars("heading", {
        margin: 5,
    });

    const border = themeVars("border", {
        radius: globalVars.border.radius,
        width: globalVars.border.width,
    });

    const input = themeVars("input", {
        fg: globalVars.mainColors.fg,
        bg: globalVars.mainColors.bg,
    });

    const searchIcon = themeVars("searchIcon", {
        gap: 32,
        height: 13,
        width: 13,
        fg: input.fg.fade(0.7),
    });

    const results = themeVars("results", {
        fg: globalVars.mainColors.fg,
        bg: globalVars.mainColors.bg,
        borderRadius: globalVars.border.radius,
    });

    return {
        search,
        searchIcon,
        sizing,
        placeholder,
        input,
        heading,
        results,
        border,
    };
});

export const searchBarClasses = useThemeCache(() => {
    const globalVars = globalVariables();
    const vars = searchBarVariables();
    const titleBarVars = titleBarVariables();
    const classesButton = buttonClasses();
    const formElementVars = formElementsVariables();
    const mediaQueries = layoutVariables().mediaQueries();
    const style = styleFactory("searchBar");
    const shadow = shadowHelper();

    const root = style(
        {
            cursor: "pointer",
            $nest: {
                "& .searchBar__placeholder": {
                    color: colorOut(globalVars.mixBgAndFg(0.5)),
                    margin: "auto",
                },

                "& .suggestedTextInput-valueContainer": {
                    $nest: {
                        ".inputBlock-inputText": {
                            height: "auto",
                        },
                    },
                },
                "& .searchBar-submitButton": {
                    position: "relative",
                    borderTopLeftRadius: important(0),
                    borderBottomLeftRadius: important(0),
                    marginLeft: unit(-globalVars.border.width * 2),
                    minWidth: unit(vars.search.minWidth),
                    flexBasis: unit(vars.search.minWidth),
                    minHeight: unit(vars.sizing.height),
                    $nest: {
                        "&:hover, &:focus": {
                            zIndex: 1,
                        },
                    },
                },
                "& .searchBar__control": {
                    display: "flex",
                    flex: 1,
                    border: 0,
                    backgroundColor: "transparent",
                    height: percent(100),
                    maxWidth: calc(`100% - ${unit(vars.sizing.height)}`),
                    $nest: {
                        "&.searchBar__control--is-focused": {
                            boxShadow: "none",
                            $nest: {
                                "&.inputText": {
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                    ...borders(buttonVariables().standard.borders),
                                },
                            },
                        },
                    },
                },
                "& .searchBar__value-container": {
                    overflow: "auto",
                    cursor: "text",
                    $nest: {
                        "& > div": {
                            width: percent(100),
                        },
                    },
                },
                "& .searchBar__indicators": {
                    display: "none",
                },
            },
        },
        mediaQueries.oneColumnDown({
            $nest: {
                "& .searchBar-submitButton": {
                    minWidth: 0,
                },
            },
        }),
    );

    const results = style("results", {
        backgroundColor: colorOut(vars.results.bg),
        color: colorOut(vars.results.fg),
        $nest: {
            "&:empty": {
                display: important("none"),
            },
            ".suggestedTextInput__placeholder": {
                color: colorOut(formElementVars.placeholder.color),
            },
            ".suggestedTextInput-noOptions": {
                padding: px(12),
            },
            ".suggestedTextInput-option": {
                width: percent(100),
                padding: px(12),
                textAlign: "left",
                display: "block",
                color: "inherit",
                $nest: {
                    "&:hover, &:focus, &.isFocused": {
                        color: "inherit",
                        backgroundColor: globalVars.states.hover.color.toString(),
                    },
                },
            },
            ".suggestedTextInput-item": {
                $nest: {
                    "& + .suggestedTextInput-item": {
                        borderTop: `solid 1px ${globalVars.border.color.toString()}`,
                    },
                },
            },
        },
    });

    const resultsAsModal = style("results", {
        position: "absolute",
        top: unit(vars.sizing.height),
        left: 0,
        overflow: "hidden",
        ...borders({
            radius: unit(vars.results.borderRadius),
        }),
        ...shadow.dropDown(),
        zIndex: 1,
    });

    const valueContainer = style("valueContainer", {
        display: "flex",
        alignItems: "center",
        borderRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        height: unit(vars.sizing.height),
        backgroundColor: colorOut(vars.input.bg),
        color: colorOut(vars.input.fg),
        cursor: "text",
        ...borderRadii({
            right: 0,
            left: vars.border.radius,
        }),
        $nest: {
            "&&&": {
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: unit(vars.searchIcon.gap),
            },
        },
    });

    // Has a search button attached.
    const compoundValueContainer = style("compoundValueContainer", {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    });

    const actionButton = style("actionButton", {
        marginLeft: -vars.border.width,
        ...borderRadii({
            left: 0,
            right: vars.border.radius,
        }),
    });

    const label = style("label", {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    });

    const clear = style("clear", {
        position: "relative",
        display: "flex",
        boxSizing: "border-box",
        height: unit(vars.sizing.height),
        width: unit(vars.sizing.height),
        color: colorOut(globalVars.mixBgAndFg(0.78)),
        $nest: {
            "&, &.buttonIcon": {
                border: "none",
                boxShadow: "none",
            },
            "&:hover": {
                color: colorOut(globalVars.mainColors.primary),
            },
            "&:focus": {
                color: colorOut(globalVars.mainColors.primary),
            },
        },
    });

    const form = style("form", {
        display: "block",
    });

    const content = style("content", {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "relative",
        height: unit(vars.sizing.height),
    });

    // special selector
    const heading = style("heading", {
        $nest: {
            "&&": {
                marginBottom: unit(vars.heading.margin),
            },
        },
    });

    const iconContainer = style("iconContainer", {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: unit(globalVars.border.width * 2),
        height: unit(formElementVars.sizing.height),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: unit(vars.searchIcon.gap),
        zIndex: 1,
        cursor: "text",
    });

    const iconContainerBigInput = style("iconContainerBig", {
        $nest: {
            "&&": {
                height: unit(vars.sizing.height),
            },
        },
    });

    const icon = style("icon", {
        width: unit(vars.searchIcon.width),
        height: unit(vars.searchIcon.height),
        color: colorOut(vars.searchIcon.fg),
    });

    const menu = style("menu", {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minHeight: unit(vars.sizing.height),
        $nest: {
            "&.hasFocus .searchBar-valueContainer": {
                borderColor: colorOut(globalVars.mainColors.primary),
            },
            "&&": {
                position: "relative",
            },
            "& .searchBar__menu-list": {
                maxHeight: calc(`100vh - ${unit(titleBarVars.sizing.height)}`),
                width: percent(100),
            },
            "& .searchBar__input": {
                color: colorOut(globalVars.mainColors.fg),
                width: percent(100),
                display: important("block"),
                $nest: {
                    input: {
                        width: important(percent(100).toString()),
                        lineHeight: globalVars.lineHeights.base,
                    },
                },
            },
            "& .suggestedTextInput-menu": {
                borderRadius: unit(globalVars.border.radius),
                marginTop: unit(-formElementVars.border.width),
                marginBottom: unit(-formElementVars.border.width),
            },
            "&:empty": {
                display: "none",
            },
        },
    });

    return {
        root,
        compoundValueContainer,
        valueContainer,
        actionButton,
        label,
        clear,
        form,
        content,
        heading,
        iconContainer,
        iconContainerBigInput,
        icon,
        results,
        resultsAsModal,
        menu,
    };
});
