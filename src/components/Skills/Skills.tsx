import { ActionIcon, Pill, TextInput } from "@mantine/core";
import Add from "../../assets/add.svg?react";
import style from "./style.module.scss";
import { Remove } from "../../shared/Remove/Remove";
import { useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { v4 as uuidv4 } from "uuid";
import {
  addToSkills,
  removeFromSkills,
} from "../../reducers/SkillsSlice/SkillsSlice";

export const Skills = () => {
  const [value, setValue] = useState<string>("");
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };
  const dispatch = useTypedDispatch();
  const skillsList = useTypedSelector((state) => state.skills.skillsList);
  return (
    <div className={style.skills}>
      <p className={style.title}>Ключевые навыки</p>
      <div className={style.action}>
        <TextInput
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              dispatch(
                addToSkills({
                  id: uuidv4(),
                  name: value,
                })
              );
              setValue("");
            }
          }}
          value={value}
          onChange={handleChange}
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
          onClick={() => {
            dispatch(
              addToSkills({
                id: uuidv4(),
                name: value,
              })
            );
            setValue("");
          }}
        >
          <Add width={18} height={18} />
        </ActionIcon>
      </div>
      <div className={style.tags}>
        {skillsList.map((item) => {
          return (
            <Pill
              key={item.id}
              classNames={{ label: style.tag, root: style.wrapper }}
            >
              {item.name}
              <Remove
                onClick={() => {
                  dispatch(
                    removeFromSkills({
                      id: item.id,
                    })
                  );
                }}
              />
            </Pill>
          );
        })}
      </div>
    </div>
  );
};
