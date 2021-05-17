import { Component } from "react";

declare module "react-native-super-alert" {
    export type SuperAlertProps = {
      title?: string;
      message?: string;
      settings?: array;
      onCancel?: () => void;
      onConfirm?: () => void;
      onClose?: () => void;
    };

    class SuperAlert extends Component<SuperAlertProps> {
      alert(): void;
    }

    export default SuperAlert;
  }