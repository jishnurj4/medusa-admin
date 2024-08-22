import * as React from "react";
import { clx } from "../../utils/clx";
import { cva } from "cva";
const statusBadgeVariants = cva({
    base: "flex items-center justify-center w-5 h-[18px] [&_div]:w-2 [&_div]:h-2 [&_div]:rounded-sm",
    variants: {
        color: {
            green: "[&_div]:bg-ui-tag-green-icon",
            red: "[&_div]:bg-ui-tag-red-icon",
            orange: "[&_div]:bg-ui-tag-orange-icon",
            blue: "[&_div]:bg-ui-tag-blue-icon",
            purple: "[&_div]:bg-ui-tag-purple-icon",
            grey: "[&_div]:bg-ui-tag-neutral-icon",
        },
    },
    defaultVariants: {
        color: "grey",
    },
});
/**
 * This component is based on the span element and supports all of its props
 */
const StatusBadge = React.forwardRef(({ children, className, 
/**
 * The status's color.
 */
color = "grey", ...props }, ref) => {
    return (React.createElement("span", { ref: ref, className: clx("txt-compact-xsmall-plus bg-ui-bg-subtle text-ui-fg-subtle border-ui-border-base box-border flex w-fit select-none items-center overflow-hidden rounded-md border pl-0 pr-1 leading-none", className), ...props },
        React.createElement("div", { role: "presentation", className: statusBadgeVariants({ color }) },
            React.createElement("div", null)),
        children));
});
StatusBadge.displayName = "StatusBadge";
export { StatusBadge };
//# sourceMappingURL=status-badge.js.map