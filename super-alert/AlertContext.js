import React, { createContext, useState } from 'react';
import Alert from './components/alert';
import BottomSheet from './components/bottomSheet';

// DEFAULT ALERT PARAMS
const initialState = {
  isOpen: false,
  title: '',
  message: '',
  settings: {
    type: 'Alert',
    textConfirm: 'Ok',
    textCancel: null
  }
};

export const alertContext = createContext(initialState);
const { Provider } = alertContext;

export default props => {
  const [alertState, setAlertState] = useState(initialState);

  // SET ALERT PARAMS INSIDE STATE
  alert = (title, message, settings) => {
    setAlertState({
      isOpen: true,
      title,
      message,
      settings: settings ? settings : initialState.settings,
    });
  };

  // CLOSE ALERT
  close = () => {
    setAlertState(initialState);
    if (typeof alertState.settings.onClose === "function") alertState.settings.onClose()
  };

  confirm = () => {
    setAlertState(initialState);
    if (typeof alertState.settings.onConfirm === "function") alertState.settings.onConfirm()
  };

  cancel = () => {
    setAlertState(initialState);
    if (typeof alertState.settings.onCancel === "function") alertState.settings.onCancel()
  };


  return (
    <>
      <Provider value={alert}>{props.children}</Provider>
      {(() => {
        switch (alertState.settings.type) {
          case 'Alert':
            return (
              <Alert {...alertState} close={close} confirm={confirm} cancel={cancel}/>
            )
          case 'BottomSheet':
            return (
              <BottomSheet {...alertState} close={close} />
            )
          default:
            return (
              <Alert {...alertState} close={close} confirm={confirm} cancel={cancel}/>
            )
        }
      })()}
    </>
  );
};

