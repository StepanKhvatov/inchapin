import { PropsWithChildren, } from "react"
import clsx from "clsx"

import styles from "./Button.module.scss"


export type ButtonProps = PropsWithChildren<{
    variant: "primary",
    size: "small" | "large",
    className?: string,
    //  TO DO: поменять на html attr
    onClick?: () => void
}>

export const Button = ({ variant, size, className, children }: ButtonProps) => {
    return <button className={clsx(styles.button, styles[variant], styles[size], className)}>{children}</button>
}