import type { FC } from "react"
import type { HeaderMenuProps } from "./HeaderMenu.types"
import Divider from "../../atoms/Divider"
import Heading from "../../atoms/Heading"
import { NavLink } from "react-router-dom"
import Image from "../../atoms/Image"
import { multipleClassName } from "../../../utils/multipleClassName"


const HeaderMenu: FC<HeaderMenuProps> = ({
    headerClassName,
    headerLabel,
    headerLabelLevel,
    hrefIconDroite,
    hrefIconGauche,
    imageSrcDroite,
    imageSrcGauche,
    width,
	height,
    dividerVariant = "horizontal",
    textClassName,
    imageClassName,
    linkClassName
}) => {
    return(
        <>
        <header className={multipleClassName( "grid grid-cols-3 items-center h-1/5 w-full px-4 py-2", headerClassName)}>
            <NavLink to={hrefIconDroite} className={linkClassName}>
                <Image src={imageSrcDroite} width={width}
				height={height}  className={imageClassName} alt="" aria-hidden="true"/>
            </NavLink>
            <Heading level={headerLabelLevel} className={textClassName}>
                {headerLabel}
            </Heading>
            <NavLink to={hrefIconGauche} className={linkClassName}>
                <Image src={imageSrcGauche} width={width}
				height={height} className={imageClassName} alt="" aria-hidden="true"/>
            </NavLink>

        </header>
        <Divider variant={dividerVariant} />
        </>
    )
}

export default HeaderMenu