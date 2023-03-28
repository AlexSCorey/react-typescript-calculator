import { Button, GridItem, gridSpans } from "@patternfly/react-core";

export function NumberButton(props: {
  number: string | number;
  onClick: () => void;
  span: gridSpans;
}) {
  return (
    <GridItem key={props.number} span={props.span}>
      <Button isBlock onClick={props.onClick}>
        {props.number}
      </Button>
    </GridItem>
  );
}
