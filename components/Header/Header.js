import React from "react";
import Image from "next/image";
import logo from "../../public/Group 20.png";
import classes from "./Header.module.scss";
import ListIcon from "@mui/icons-material/List";

const Header = () => {
  return (
    <div className={classes.header}>
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.left}>
          <Image src={logo} alt="logo" />
          <ul>
            <li>Справочник Ташкента</li>
            <li>Sprav.uz</li>
          </ul>
        </div>
        <ul className={classes.lang_wrap}>
          <li>Ру</li>
          <li>O‘z</li>
          <li>En</li>
        </ul>
      </div>
      <div className={classes.bottom}>
        <button>
        <ListIcon sx={{ fontSize: 50 }} />
        </button>
        <div className={classes.search_part}>
          <select>
            <option value="h">Ташкент</option>
            <option value="t">Ташкент</option>
            <option value="r">Ташкент</option>
            <option value="e">Ташкент</option>
            <option value="e">Tashkent</option>
          </select>
          <div className={classes.search_input}>
            <input type="text" placeholder="Поиск"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
