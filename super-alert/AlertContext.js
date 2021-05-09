import React, { createContext, useState } from 'react';
import Alert from './components/alert';
import BottomSheet from './components/bottomSheet';

const initialState = {
  isOpen: false,
  title: '',
  message: '',
  type: '',
  textConfirm: '',
  textCancel: ''
};

export const alertContext = createContext(initialState);

const { Provider } = alertContext;

export default props => {

  const [alertState, setAlertState] = useState(initialState);

  alert = (title, message, type = 'Alert', textConfirm = 'Close', textCancel) => {
    setAlertState({
      isOpen: true,
      title,
      message,
      type,
      textConfirm,
      textCancel
    });
  };

  close = () => {
    setAlertState(initialState);
  };

  return (
    <>
      <Provider value={alert}>{props.children}</Provider>
      {alertState.type == 'Alert' ? (
        <Alert {...alertState} close={close} />
      ) : (
        <BottomSheet {...alertState} close={close} />
      )}
    </>
  );
};