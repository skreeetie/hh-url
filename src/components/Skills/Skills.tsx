import { TextInput } from "@mantine/core";
import style from "./style.module.scss";

export const Skills = () => {
  return (
    <div className={style.skills}>
      <p className={style.title}>Ключевые навыки</p>
      <div>
        <TextInput
          size="xs"
          radius="md"
          placeholder="Навык"
          classNames={{ input: style.input, wrapper: style.search }}
        />
      </div>
    </div>
  );
};
