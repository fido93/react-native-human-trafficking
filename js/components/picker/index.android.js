import React, { Component } from "react";
import { Platform } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  View,
  H3,
  List,
  ListItem,
  Item as FormItem
} from "native-base";

import styles from "./styles";

const Item = Picker.Item;

class NHPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      }
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Picker</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#4CDA64" }}>
                <Icon name="arrow-dropdown" />
              </Button>
            </Left>
            <Body>
              <Text>Pick SIM</Text>
            </Body>
            <Right>

            </Right>
          </ListItem>
          <Picker
            note
            iosHeader="Select one"
            mode="dropdown"
            style={{ width: 120 }}
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Item label="TATA" value="key0" />
            <Item label="AIRTEL" value="key1" />
          </Picker>
        </Content>
      </Container>
    );
  }
}

export default NHPicker;
