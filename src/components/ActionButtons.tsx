import { Button, GridItem, gridSpans } from "@patternfly/react-core";
import { Operation } from "../App";

export function AdditionButton(props: {
  span: gridSpans;
  setOperation: (value: Operation) => void;
}) {
  return (
    <GridItem span={props.span}>
      <Button
        variant="warning"
        isBlock
        onClick={() => {
          props.setOperation("add");
        }}
      >
        +
      </Button>
    </GridItem>
  );
}

export function SubtractionButton(props: {
  span: gridSpans;
  setOperation: (value: Operation) => void;
}) {
  return (
    <GridItem span={props.span}>
      <Button
        isBlock
        variant="warning"
        onClick={() => {
          props.setOperation("subtract");
        }}
      >
        -
      </Button>
    </GridItem>
  );
}

export function MultiplyButton(props: {
  span: gridSpans;
  setOperation: (value: Operation) => void;
}) {
  return (
    <GridItem span={props.span}>
      <Button
        isBlock
        variant="warning"
        onClick={() => {
          props.setOperation("multiply");
        }}
      >
        x
      </Button>
    </GridItem>
  );
}

export function DivideButton(props: {
  span: gridSpans;
  setOperation: (value: Operation) => void;
}) {
  return (
    <GridItem style={{ alignSelf: "end" }} span={props.span}>
      <Button
        isBlock
        variant="warning"
        onClick={() => {
          props.setOperation("divide");
        }}
      >
        /
      </Button>
    </GridItem>
  );
}

export function ClearButton(props: {
  setInitialValue: (value: string) => void;
  setSecondValue: (value: string) => void;
  setFinalValue: (value: number | undefined) => void;
  span: gridSpans;
}) {
  const { setInitialValue, setFinalValue, setSecondValue } = props;
  return (
    <GridItem span={props.span}>
      <Button
        style={{ width: "100%" }}
        variant="danger"
        onClick={() => {
          setInitialValue("");
          setSecondValue("");
          setFinalValue(undefined);
        }}
      >
        Clear
      </Button>
    </GridItem>
  );
}
