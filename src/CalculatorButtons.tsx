import { Operation } from "./App";
import {
  AdditionButton,
  ClearButton,
  DivideButton,
  MultiplyButton,
  SubtractionButton,
} from "./components/ActionButtons";
import { DecimalButton } from "./components/DecimalButton";
import { EqualButton } from "./components/EqualButton";
import { NumberButton } from "./components/NumberButton";

const numberButtons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
] as const;

export function CalculatorButtons(props: {
  setOperation: (value: Operation) => void;
  setDisplayValue: (value: string) => void;
  onHandleEqual: () => void;
  onAddDecimal: () => void;
  setInitialValue: (value: string) => void;
  setSecondValue: (value: string) => void;
  setFinalValue: (value: number | undefined) => void;
}) {
  const { setDisplayValue, onHandleEqual, onAddDecimal, ...rest } = props;
  return (
    <>
      <ClearButton span={9} {...rest} />
      <DivideButton span={3} {...rest} />

      {numberButtons.map((number) => {
        if (number === "3") {
          return (
            <>
              <NumberButton
                span={3}
                onClick={() => setDisplayValue(number)}
                number={number}
              />
              <AdditionButton span={3} {...rest} />
            </>
          );
        }
        if (number === "6") {
          return (
            <>
              <NumberButton
                span={3}
                onClick={() => setDisplayValue(number)}
                number={number}
              />
              <SubtractionButton span={3} {...rest} />
            </>
          );
        }

        if (number === "9") {
          return (
            <>
              <NumberButton
                span={3}
                onClick={() => setDisplayValue(number)}
                number={number}
              />
              <MultiplyButton span={3} {...rest} />
            </>
          );
        }
        if (number === "0") {
          return (
            <>
              <NumberButton
                span={6}
                onClick={() => setDisplayValue(number)}
                number={number}
              />
              <DecimalButton span={3} onAddDecimal={onAddDecimal} />
              <EqualButton span={3} onHandleEqual={onHandleEqual} />
            </>
          );
        }
        return (
          <NumberButton
            span={3}
            onClick={() => setDisplayValue(number)}
            number={number}
          />
        );
      })}
    </>
  );
}
