![Screenshot](https://imgur.com/LGauwG0)

### React Native Super Modal is a component where you can use various types of alerts and notifications without having to import the library on all screens..

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
                <SuperAlert onClose={onClose} /> {/* <--- Load Super Modal is here */}
            </View>
        );
    }
}
```
## Usage

##### After import Super Modal in Root of application, you can call the component from any using
```jsx
    alert(
        'Hello!!', // This is a title
        "This is a Super Alert", // This is a alert message
    )
```
## NOTE: This component will replace the default (alert) action from React Native


## Author
By [Alan Ribeiro](https://github.com/zapcriativo "Alan Ribeiro")

If you think the project is useful, please donate or give me a star!
