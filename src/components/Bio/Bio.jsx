import s from "./Bio.module.css"

export const Bio = () => {
  return (
    <div>
      <ol className={s.list}>
        <li className={s.text}>/**</li>
        <li className={s.text}>* About me</li>
        <li className={s.text}>* I have 5 years of еxperience in web</li>
        <li className={s.text}>* development lorem ipsum dolor sit amet,</li>
        <li className={s.text}>
          * consectetur adipiscing elit, sed do eiusmod
        </li>
        <li className={s.text}>* tempor incididunt ut labore et dolore</li>
        <li className={s.text}>* magna aliqua. Ut enim ad minim veniam,</li>
        <li className={s.text}>* quis nostrud exercitation ullamco laboris </li>
        <li className={s.text}>* nisi ut aliquip ex ea commodo consequat.</li>
        <li className={s.text}>* Duis aute irure dolor in reprehenderit in</li>
        <li className={s.text}>
          * voluptate velit esse cillum dolore eu fugiat
        </li>
        <li className={s.text}>* nulla pariatur. Excepteur sint occaecat </li>
        <li className={s.text}>
          * officia deserunt mollit anim id est laborum.
        </li>
        <li className={s.text}>*/</li>
      </ol>
    </div>
  );
};
