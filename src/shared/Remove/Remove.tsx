import type { MouseEventHandler } from "react";
import Close from "../../assets/close.svg?react";
import style from "./style.module.scss";

interface RemoveProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  testid: string;
}

export const Remove = ({ onClick, testid }: RemoveProps) => {
  return (
    <button className={style.button} onClick={onClick} data-testid={testid}>
      <Close width={8} height={8} />
    </button>
  );
};
