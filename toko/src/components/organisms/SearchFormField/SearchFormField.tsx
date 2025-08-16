import type { FC } from "react";
import type { SearchFormFieldProps } from "./SearchFormField.types";
import Input from "../../atoms/Input";
import ButtonField from "../../molecules/ButtonField";
import { multipleClassName } from "../../../utils/multipleClassName";

const SearchFormField: FC<SearchFormFieldProps> = ({
    divClassName,
    inputClassName,
    placeholder,
    value = "",
    onChange,
    onClick,
    buttonClassName,
    textChildren,
    textClassName,
    imageSrc,
    width,
	height,
    imageClassName
}) => {
    return (
        <div className={multipleClassName("search-form", divClassName)}>
            <Input 
                placeholder={placeholder || "Chercher contact..."}
                value={value}
                onChange={onChange || (() => {})} 
                className={inputClassName}
            /> 
            <ButtonField 
                onClick={onClick} 
                buttonClassName={buttonClassName}
                imageSrc={imageSrc}
                imageClassName={imageClassName}
                textChildren={textChildren}
                textClassName={textClassName}
                variant="primary"
                width={width}
                height={height}
            />
        </div>
    );
};

export default SearchFormField;