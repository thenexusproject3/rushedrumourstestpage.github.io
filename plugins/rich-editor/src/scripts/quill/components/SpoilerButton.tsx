/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import { t } from "@library/utility/appUtils";
import { spoiler } from "@library/icons/editorIcons";

export default class SpoilerButton extends React.Component<{}> {
    public render() {
        return (
            <div contentEditable={false} className="spoiler-buttonContainer">
                <button disabled className="iconButton button-spoiler" type="button">
                    <span className="spoiler-warning">
                        <span className="spoiler-warningMain">
                            {spoiler("spoiler-icon")}
                            <strong className="spoiler-warningBefore">{t("Warning")}</strong>
                            <span className="spoiler-warningAfter">{t("This is a spoiler")}</span>
                        </span>
                    </span>
                </button>
            </div>
        );
    }
}
