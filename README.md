![Screenshot](https://i.imgur.com/LGauwG0.png)

### React Native Super Alert is a component where you can use various types of alerts and notifications without having to import the library on all screens..

# Installation
```
npm i react-native-super-alert --save
```
##### or
```
yarn add react-native-super-alert
```
##### Load the library in Root file of your application (e.g. app.js)

```jsx
import SuperAlert from "react-native-super-alert";

export default function App() {
    return (
            <View>
                <AppContainer /> 
                <SuperAlert /> {/* <--- Load Super Alert here */}
            </View>
        );
    }
}
```
### NOTE: This component will replace the default (alert) action from React Native

# Usage

## Default alert

##### After import Super alert in Root of application, you can call the component from any using

![Default](https://media.giphy.com/media/FVO46g4nlC5Ys9RtFt/giphy.gif)

```jsx
   // alert('Title of alert', 'Message of alert', { Object props })
```
Example for default alert without confirm

```jsx
    alert(
        'Hello!!', // This is a title
        "This is a Super Alert", // This is a alert message
    )
```

### Using confirm and cancel action

![Confirm](https://media.giphy.com/media/5oiZMAB2XG4Mqm8vxc/giphy.gif)

Example
```jsx
    alert(
        'Hello!!', // This is a title
        "This is a Super Alert", // This is a alert message
        {
            textConfirm: 'Confirm', // Label of button confirm
            textCancel: 'Cancel', // Label of button cancel
            onConfirm: () => confirmClick(), // Call your confirm function 
            onCancel: () => cancelClick() // Call your cancel function 
        },
    )
```
Then create the functions to confirm and cancel action

```jsx
  confirmClick = () => {
    console.log('Confirm Action')
  }

  cancelClick = () => {
    console.log('Cancel Action')
  }
```
Note: You can use the confirm params in all alert types, and in the default alert the button used confirm action

## Other types

### BottomSheet

![BottomSheet](https://media.giphy.com/media/GevNv6PgKnxeFqM1Ai/giphy.gif)

```jsx
    alert(
        'Hello!!', // This is a title
        "This is a Super Alert", // This is a alert message
        {
            type: 'bottomsheet',
        },
    )
```
## Props of BottomSheet

| Prop             | Type     | Description                                              | Default                    |
| ---------------- | -------- | -------------------------------------------------------- | -------------------------- |
| bottomSheetHeight| number   | Alert BottomSheet height                                 | 180                        |

### Flash Message

![Alt Text](https://media.giphy.com/media/LoLCAkNZ23waSThMLq/giphy.gif  )

### Example with React Navigation Component

![Alt Text](https://media.giphy.com/media/kWLj0yJfFLOPWM4vqe/giphy.gif)

# Global Props 
| Prop             | Type     | Description                                              | Default                    |
| ---------------- | -------- | -------------------------------------------------------- | -------------------------- |
| useNativeDriver  | boolean  | Use native driver                                        | false                      |
| textConfirm      | string   | Button confirm label                                     | false                      |
| textCancel       | string   | Button cancel label                                      | false                      |

## Author
By [Alan Ribeiro](https://github.com/zapcriativo "Alan Ribeiro")

If you think the project is useful, please donate or give me a star!
