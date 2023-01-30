import React from "react";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t, i18n } = useTranslation();

  const toPt = () => {
    i18n.changeLanguage("pt");
  };

  const toEn = () => {
    i18n.changeLanguage("en");
  };

  return (
    <>
      <input type={"button"} name="english" value="english" onClick={toEn} />
      <input
        type={"button"}
        name="portuguese"
        value="portuguese"
        onClick={toPt}
      />
      {t("teste")}
    </>
  );
}
