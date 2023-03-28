import { Button, GridItem, gridSpans } from "@patternfly/react-core";

export function EqualButton(props: {
  onHandleEqual: () => void;
  span: gridSpans;
}) {
  return (
    <GridItem key="equal" span={props.span}>
      <Button variant="warning" isBlock onClick={props.onHandleEqual}>
        =
      </Button>
    </GridItem>
  );
}
