import type { FC } from "react"
import Divider from "../../atoms/Divider"

import { NavLink } from "react-router-dom"
import Image from "../../atoms/Image"
import { multipleClassName } from "../../../utils/multipleClassName"
import type { FooterMenuProps } from "./FooterMenu.types"
import { menuItems } from "./Menu.items"
import ImageWithCaption from "../../molecules/ImageWithCaption"
import ButtonField from "../../molecules/ButtonField"


const HeaderMenu: FC<FooterMenuProps> = ({
    footerClassName,
    
	btnDisconnect,
	imageBtnDisconnect,
  
    width,
	height,
    dividerVariant = "horizontal",

    onClick,

    imageClassName,
    linkClassName
}) => {
    const menuItemsCount: number = menuItems.length + 1
    
    return(
        <>
        <Divider variant={dividerVariant} />
        <footer className={multipleClassName("w-1/5", footerClassName)}>
        {menuItems.map((menuItem, i) => (
            <NavLink key={i} to={menuItem.link} aria-label={menuItem.name} className={linkClassName}>
                <ImageWithCaption imageSrc={menuItem.icon} width={width} height={height} imageClassName={imageClassName} alt=""  aria-hidden="true" caption={menuItem.name} />
            </NavLink>
        ))}
        <ButtonField onClick={onClick} width={width} height={height} imageClassName={imageClassName}  aria-hidden="true" imageSrc={imageBtnDisconnect} textChildren={btnDisconnect} />
        </footer>
        </>
    )
}

export default HeaderMenu