import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg"
import ThemeOf from "../../assets/images/themeOff.svg"
import { Icone } from "../UI"


const claro = <Icone src={ThemeOn} alt="Icone para tema claro"/>
const escuro = <Icone src={ThemeOf} alt="Icone para tema escuro"/>

export default ({tema}) => (tema ? escuro : claro)