import { ActionIcon, Pill, TextInput } from "@mantine/core";
import Add from "../../assets/add.svg?react";
import style from "./style.module.scss";
import { Remove } from "../../shared/Remove/Remove";
import { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/redux";
import { setSkills } from "../../redux/reducers/SkillsSlice/SkillsSlice";
import { useSearchParams } from "react-router";

export const Skills = () => {
  const [value, setValue] = useState<string>("");
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };
  const dispatch = useTypedDispatch();
  const skillsList = useTypedSelector((state) => state.skills.skillsList);
  const [searchParams, setSearchParams] = useSearchParams({
    skills: "TypeScript React Redux",
  });
  useEffect(() => {
    const skills = searchParams.get("skills") || "";
    dispatch(setSkills({ list: skills.split(" ") }));
  }, [dispatch, searchParams]);
  return (
    <div className={style.skills}>
      <p className={style.title}>Ключевые навыки</p>
      <div className={style.action}>
        <TextInput
          onKeyDown={({ key }) => {
            if (key === "Enter" && value) {
              if (searchParams.get("skills")) {
                setSearchParams({
                  skills: `${searchParams.get("skills")} ${value}`,
                });
              } else {
                setSearchParams({
                  skills: `${value}`,
                });
              }
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
            if (value) {
              if (searchParams.get("skills")) {
                setSearchParams({
                  skills: `${searchParams.get("skills")} ${value}`,
                });
              } else {
                setSearchParams({
                  skills: `${value}`,
                });
              }
              setValue("");
            }
          }}
          data-testid="add"
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
                  setSearchParams({
                    skills: skillsList
                      .filter((skill) => skill.id !== item.id)
                      .map((skill) => skill.name)
                      .join(" "),
                  });
                }}
                testid="remove"
              />
            </Pill>
          );
        })}
      </div>
    </div>
  );
};
