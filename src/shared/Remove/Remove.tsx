import type { MouseEventHandler } from "react";
import Close from "../../assets/close.svg?react";
import style from "./style.module.scss";

interface RemoveProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Remove = ({ onClick }: RemoveProps) => {
  return (
    <button className={style.button} onClick={onClick}>
      <Close width={8} height={8} />
    </button>
  );
};
