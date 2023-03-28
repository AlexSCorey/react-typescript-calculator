import { useState } from "react";
import { Grid } from "@patternfly/react-core";
import "./App.css";
import "@patternfly/react-core/dist/styles/base.css";
import { CalculatorButtons } from "./CalculatorButtons";
import { Display } from "./Display";

export type Operation = "add" | "subtract" | "multiply" | "divide";

function App() {
  const [operation, setOperation] = useState<Operation | undefined>();
  const [initialValue, setInitialValue] = useState<string | undefined>();
  const [secondValue, setSecondValue] = useState<string | undefined>();

  const [finalValue, setFinalValue] = useState<number | undefined>();
  const addDecimal: () => void = () => {
    if (operation && secondValue) {
      return setSecondValue(secondValue.concat("."));
    }
    if (initialValue) {
      return setInitialValue(initialValue.concat("."));
    }
  };

  const handleEqual: () => void = () => {
    if (!initialValue || !secondValue) {
      return;
    }
    const first: number = parseFloat(initialValue);
    const second: number = parseFloat(secondValue);
    if (!secondValue) {
      return;
    }
    if (!initialValue) {
      setFinalValue(parseFloat(secondValue));
      return;
    }

    switch (operation) {
      case "add":
        setFinalValue(first + second);
        setInitialValue("");
        setSecondValue("");
        setOperation(undefined);
        return;
      case "subtract":
        setFinalValue(first - second);
        setInitialValue("");
        setSecondValue("");
        setOperation(undefined);
        return;
      case "multiply":
        setFinalValue(first * second);
        setInitialValue("");
        setSecondValue("");
        setOperation(undefined);
        return;
      case "divide":
        setFinalValue(first / second);
        setInitialValue("");
        setSecondValue("");
        setOperation(undefined);
        return;
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <Grid hasGutter style={{ gridGap: ".25rem" }}>
          <Display
            value={operation ? secondValue : initialValue}
            finalValue={finalValue}
          />
          <CalculatorButtons
            onAddDecimal={addDecimal}
            setDisplayValue={(number) => {
              if (operation) {
                return setSecondValue(
                  secondValue ? secondValue.concat(number) : number
                );
              }
              if (initialValue) {
                return setInitialValue(initialValue.concat(number));
              }
              return setInitialValue(number);
            }}
            onHandleEqual={handleEqual}
            setOperation={setOperation}
            setInitialValue={setInitialValue}
            setSecondValue={setSecondValue}
            setFinalValue={setFinalValue}
          />
        </Grid>
      </div>
    </div>
  );
}

export default App;
