import { ActionIcon, Pill, TextInput } from "@mantine/core";
import Add from "../../assets/add.svg?react";
import style from "./style.module.scss";
import { Remove } from "../../shared/Remove/Remove";

export const Skills = () => {
  return (
    <div className={style.skills}>
      <p className={style.title}>Ключевые навыки</p>
      <div className={style.action}>
        <TextInput
          size="xs"
          radius="md"
          placeholder="Навык"
          classNames={{ input: style.input, wrapper: style.search }}
        />
        <ActionIcon
          variant="filled"
          radius="md"
          aria-label="Add"
          classNames={{ root: style.add }}
        >
          <Add width={18} height={18} />
        </ActionIcon>
      </div>
      <div className={style.tags}>
        {["Item 1", "Item 2", "Item 3"].map((item) => {
          return (
            <Pill classNames={{ label: style.tag }}>
              {item}
              <Remove onClick={() => 0} />
            </Pill>
          );
        })}
      </div>
    </div>
  );
};
