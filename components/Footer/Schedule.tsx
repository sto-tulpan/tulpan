import * as React from "react";
import styled from "styled-components";

import { useTime } from "scripts/useTime";

const Block = styled.div`
  & h5 {
    color: #ffffff;
    margin-bottom: 24px;
  }
  & li {
    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }
`;

const Tag = styled.li`
  color: #e8e8e8;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  width: fit-content;

  & > * {
    line-height: inherit;
  }

  font-family: var(--sans-family);

  display: grid;
  gap: 24px;
  grid-template-columns: 120px 120px;
  position: relative;

  &[data-is-current="true"] {
    color: white;
    font-weight: 600;
    font-variation-settings: "wght" 600;

    &::before {
      content: "☀️";
      position: absolute;
    }

    &[data-is-sunday="true"] {
      &::before {
        content: "🌙";
      }
    }

    &:not([data-icon-position]) {
      &::before {
        @media (min-width: 721px) {
          left: -32px;
        }
        @media (max-width: 720px) {
          right: -32px;
        }
      }
    }
    &[data-icon-position="right"] {
      &::before {
        right: -32px;
      }
    }
  }
`;

interface TimeProps {
  day:
    | "Понедельник"
    | "Вторник"
    | "Среда"
    | "Четверг"
    | "Пятница"
    | "Суббота"
    | "Воскресенье";
  dayIndex: number;
  time: string;
  iconPosition?: "left" | "right";
}

const Time: React.FC<TimeProps> = ({ day, dayIndex, time, iconPosition }) => {
  const today = useTime();
  const currentDay = today.getDay();

  return (
    <Tag
      data-is-current={dayIndex === currentDay}
      data-is-sunday={dayIndex === 0}
      data-icon-position={iconPosition}
    >
      <div>{day}</div>
      <div>{time}</div>
    </Tag>
  );
};

interface ScheduleProps {
  iconPosition?: "left" | "right";
}

export const Schedule: React.FC<ScheduleProps> = ({ iconPosition }) => (
  <Block>
    <h5>График работы</h5>

    <ul>
      <Time
        day="Понедельник"
        dayIndex={1}
        time="9:00 - 18:00"
        iconPosition={iconPosition}
      />
      <Time
        day="Вторник"
        dayIndex={2}
        time="9:00 - 18:00"
        iconPosition={iconPosition}
      />
      <Time
        day="Среда"
        dayIndex={3}
        time="9:00 - 18:00"
        iconPosition={iconPosition}
      />
      <Time
        day="Четверг"
        dayIndex={4}
        time="9:00 - 18:00"
        iconPosition={iconPosition}
      />
      <Time
        day="Пятница"
        dayIndex={5}
        time="9:00 - 18:00"
        iconPosition={iconPosition}
      />
      <Time
        day="Суббота"
        dayIndex={6}
        time="9:00 - 16:00"
        iconPosition={iconPosition}
      />
      <Time
        day="Воскресенье"
        dayIndex={0}
        time="Выходной"
        iconPosition={iconPosition}
      />
    </ul>
  </Block>
);
