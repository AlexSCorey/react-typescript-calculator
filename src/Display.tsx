import { GridItem, TextInput } from "@patternfly/react-core";

export function Display(props: {
  value: string | undefined;
  finalValue: number | undefined;
}) {
  const { value, finalValue } = props;
  return (
    <GridItem span={12}>
      <TextInput value={finalValue ?? (value || 0)} readOnly />
    </GridItem>
  );
}
