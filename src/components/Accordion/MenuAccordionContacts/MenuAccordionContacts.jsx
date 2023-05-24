import { useState } from "react";
import classNames from "classnames";
import s from "./MenuAccordionContacts.module.css";
import { ComponMenuAccodion } from "./ComponMenuAccodion";
import mail from "../assets/mail-icon.svg";
import tel from "../assets/phone-icon.svg";
import find from "../assets/iconfind.svg";

export const MenuAccordionContacts = ({ title }) => {
  const [isActiveFindme, setisActiveFindme] = useState(false);

  return (
    <>
      <div className={s.accordion__item}>
        <div className={s.accordion__title}>
          <span>&#x25bc;</span>
          <span className={s.accordionSpan}>contacts</span>
        </div>
        <ul className={s.accordion__list}>
          <li>
            <ComponMenuAccodion text="user@gmail.com" icon={mail} />
          </li>
          <li>
            <ComponMenuAccodion text="+3598246359" icon={tel} />
          </li>
        </ul>
      </div>

      {/*вторая вкладка для меню  */}

      <div className={s.accordion__item}>
        <div
          className={s.accordion__title}
          onClick={() => setisActiveFindme(!isActiveFindme)}
        >
          {!isActiveFindme ? <span>&#x25bc;</span> : <span>&#x25ba;</span>}
          <span className={s.accordionSpan}>find-me-also-in</span>
        </div>
        <ul className={classNames(s.accordion__list, s.accordion__lastlist)}>
          <li>
            <ComponMenuAccodion
              text="YouTube channel"
              icon={find}
              isActiveContacts={isActiveFindme}
            />
          </li>
          <li>
            <ComponMenuAccodion
              text="Instagram accaunt"
              icon={find}
              isActiveContacts={isActiveFindme}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
