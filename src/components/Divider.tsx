import {Divider as ChakraDivider, Grid} from "@chakra-ui/react";

export function Divider() {
  return (
    <Grid gridTemplateColumns="1fr 1fr" gap="12" opacity="0.4">
      <ChakraDivider mt="6" />
      <ChakraDivider mt="6" />
    </Grid>
  );
}
