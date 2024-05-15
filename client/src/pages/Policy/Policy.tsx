"use client";

import React from "react";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";

const Policy = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <head>
        <title>Политика конфиденциальности - UWUSTUDIO</title>
        <meta
          name="description"
          content="На странице политики конфиденциальности мы предоставляем информацию о защите ваших данных, их использовании и защите. Узнайте о сборе данных, вашем праве на контроль и удаление, а также о соблюдении законодательных требований."
        />
      </head>
      <div className="container">
        <div className={style.policy__wrapper}>
          <section className={style.policy__title}>
            <h1>{t("policyTitle")}</h1>
          </section>

          <section className={style.policy__container}>
            <ol>
              <li>
                <h3>{t("policyItem1Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem1Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem1Text2")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem1Text3")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem1Text4")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem1Text5")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem1Text6")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem2Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem2Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem2Text2")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem2Text3")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem2Text4")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem2Text5")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem2Text6")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem2Text7")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem3Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem3Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem3Text2")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem4Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem4Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem4Text2")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem5Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem5Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem5Text2")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem5Text3")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem5Text4")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem5Text5")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem5Text6")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem5Text7")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem5Text8")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem6Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem6Text1")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem7Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem7Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem7Text2")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem7Text3")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem7Text4")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem7Text5")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem7Text6")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem7Text7")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem8Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem8Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem8Text2")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem8Text3")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem8Text4")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem8Text5")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem8Text6")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem8Text7")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem8Text8")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem8Text9")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem9Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem9Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text2")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text3")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text4")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text5")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text6")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text7")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text8")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text9")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text10")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text11")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem9Text12")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem10Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem10Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem10Text2")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem11Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem11Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem11Text2")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem11Text3")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem11Text4")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem11Text5")}</p>
                  </li>
                </ol>
              </li>

              <li>
                <h3>{t("policyItem12Title")}</h3>

                <ol>
                  <li>
                    <p>{t("policyItem12Text1")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem12Text2")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem12Text3")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem12Text4")}</p>
                  </li>

                  <li>
                    <p>{t("policyItem12Text5")}</p>
                  </li>
                </ol>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Policy;
