declare module "react-individual-character-input-boxes" {
  import * as React from "react";

  export interface RICIBsProps {
    amount?: number;
    autoFocus?: boolean;
    handleOutputString: (string) => void;
    inputProps?: any[];
    inputRegExp?: RegExp;
    password?: boolean;
  }

  class RICIBs extends React.Component<RICIBsProps, any> {}

  export default RICIBs;
}
