import React from "react";
import clsx from "clsx";
import s from "./ContentAboutMe.module.css";

export const ContentAboutMe = ({ arr }) => {
  return (
    <>
      <ul>
       {arr.map((el) => <li>{el}</li>)} 
      </ul>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        distinctio repudiandae hic ad quasi aliquam repellat eaque tempora
        consequuntur nam ipsam vel quod magnam explicabo necessitatibus! Maiores
        magnam, itaque aspernatur quaerat voluptatem earum? Officia, repellat
        laboriosam. Nostrum, sequi. Perferendis libero odit in ipsum illo eaque
        ducimus recusandae. Quo tempora non at dolor, quia, cupiditate ad libero
        quae itaque tenetur omnis? Labore at harum pariatur magni mollitia
        voluptatem est provident repudiandae voluptatibus reiciendis asperiores
        voluptate sapiente, eius molestias in doloremque perferendis ut saepe
        officiis cum laudantium delectus sunt. Eaque fugit dolores, libero porro
        suscipit, odit blanditiis odio corporis sint at ad?
      </div>
    </>
  );
};
