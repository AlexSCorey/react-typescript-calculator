import { Button, GridItem, gridSpans } from "@patternfly/react-core";

export function DecimalButton(props: {
  onAddDecimal: () => void;
  span: gridSpans;
}) {
  return (
    <GridItem key="decimal" span={props.span}>
      <Button isBlock onClick={props.onAddDecimal}>
        .
      </Button>
    </GridItem>
  );
}
