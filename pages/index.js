import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "@/styles/Home.module.scss";
import Header from "@/components/Header/Header";
import upload from "../public/upload.png";
import editicon from "../public/editicon.png";
import location from "../public/location.png";
import pin from "../public/pin.png";
import phone from "../public/phone.png";
import time from "../public/time.png";
import global from "../public/global.png";
import message from "../public/email.png";
import "@fontsource/roboto/400.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
        <Header />
      <div className={classes.container}>
        <div className={classes.main_left_section}>
          <p className={classes.bold}>
            <span>A-STORE.UZ</span> ФИРМЕННЫЙ МАГАЗИН
          </p>
          <p className={classes.normal}>
            Контактные данные компании «GOODZONE МАГАЗИН БЫТОВОЙ ТЕХНИКИ И
            ЭЛЕКТРОНИКИ» — телефоны, местонахождение, режим работы, виды
            деятельности и другая полезная информация. Пожалуйста, сообщите
            огранизации, что вы нашли их контакты на сайте Справочник Ташкента —
            Sprav.uz.
          </p>
          <div className={classes.middle}>
            <div className={classes.middle_section}>
              <div className={classes.upload_img}>
                <Image src={upload} alt="" className={classes.uploadimg}/>
                <ul>
                  <li>XIAOMI</li>
                  <li>
                    <Image src={editicon} alt="" className={classes.editicon} />
                    с 2022 года
                  </li>
                </ul>
              </div>
              <div className={classes.map}>
                <select>
                  <option value="">Филиалы</option>
                  <option value="">tashkent</option>
                  <option value="">tashkent</option>
                </select>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50264793713!2d69.1392796409667!3d41.28251254229556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1678252844160!5m2!1sen!2s"
                  width="200"
                  height="150"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className={classes.frame}
                ></iframe>
              </div>
            </div>
            <div className={classes.contact_section}>
              <ul>
                <li>
                  <Image src={location} alt="" />
                  Ташкент, Шайхантахурский р-н, пр-т Амира Темура, 129Б
                </li>
                <li>
                  <Image src={pin} alt="" />I MAXI супермаркет, ЮНУСАБАДСКИЙ
                  РАЙОННЫЙ СУД ПО УГОЛОВНЫМ ДЕЛАМ
                </li>
              </ul>
              <div className={classes.bottom_section}>
                <div className={classes.first}>
                  <p>
                    {" "}
                    <Image src={phone} alt="" />
                    +998 71 207-XX-XX
                  </p>
                  <p>Показать номер</p>
                </div>
                <div className={classes.second}>
                  <p>
                    <Image src={time} alt="" />
                    <span>Сегодня</span> с 10 до 21
                  </p>
                  <p>
                    <span>Перерыв</span> без перерыва
                  </p>
                </div>
                <div className={classes.third}>
                  <p>
                    <Image src={global} alt="" />
                    goodzone.uz
                  </p>
                  <p>
                    <Image src={message} alt="" />
                    Показать e-mail
                  </p>
                </div>
              </div>
              <p className={classes.final_txt}>
                Различное профессиональное музыкальное оборудование. Бесплатная
                доставка музыкальных инструментов и платная – аксессуаров, таких
                как струны, подставки и т.д. в пределах города Ташкента.
              </p>
            </div>
          </div>
          <div className={classes.tab_section}>
          <Box sx={{ maxWidth: { xs: 720, sm: 880 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Информация" />
        <Tab label="Фотогалерея" />
        <Tab label="График работы" />
        <Tab label="Виды деятельности" />
        <Tab label="Виды деятельности" />

      </Tabs>
    </Box>
          </div>
        </div>
        <div className={classes.main_right_section}>

        </div>
      </div>
    </>
  );
}
