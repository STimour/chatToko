import type { FC } from "react"
import type { HeaderMenuProps } from "./HeaderMenu.types"

const HeaderMenu: FC<HeaderMenuProps> = ({
    headerClassName,
}) => {
    return(
        <header className={headerClassName}>

        </header>
    )
}

export default HeaderMenu