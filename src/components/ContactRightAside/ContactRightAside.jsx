import s from "./ContactRightAside.module.css";

export const ContactRightAside = (props) => {
  const { inputName, inputEmail, inputMessage } = props;

  let date = new Date();

  return (
    <div className={s.interactivForm}>
      <span className={s.pink}>const</span> button
      <span className={s.pink}> = </span>
      document.querySelector <span className={s.grey}>(</span>
      <span className={s.orange}>'#sendBtn'</span>
      <span className={s.grey}>)</span> <br />
      <span className={s.pink}>const</span> message =
      <span className={s.grey}> &#123;</span> <br />
      &nbsp; name: <span className={s.orange}>&#34;{inputName}&#34;</span>,
      <br />
      &nbsp; email: <span className={s.orange}>
        &#34;{inputEmail}&#34;
      </span>, <br />
      &nbsp; message:
      <span className={s.orange}>&#34;{inputMessage}&#34;</span>, <br />
      &nbsp; <span className={s.grey}>date: </span>
      <span className={s.orange}>&#34;{date.toDateString()}&#34;</span>,
      <br />
      <span className={s.grey}>&#125;</span> <br /> <br />
      button.addEventListener<span className={s.grey}>&#40;</span>
      <span className={s.orange}>'click'</span>
      <span className={s.grey}>, &#40;&#41;</span>
      <span className={s.pink}> &#8658;</span>
      <span className={s.grey}> &#123;</span> <br />
      &nbsp;form.send<span className={s.grey}>&#40;</span>message
      <span className={s.grey}>
        &#41;;
        <br />
        &#125;&#41;
      </span>
    </div>
  );
};
