import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Picker,
  Form,
  Item,
  Label,
  Input
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import styles from "./styles";

class Success extends Component {
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
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Success</Title>
          </Body>
          <Right />

        </Header>

        <Grid>
        <Row style={{ backgroundColor: "#ffffff" }}>
        <Content style={{padding:20,flex:1, flexDirection:'column'}}>
          <Text>Successfully submit to the right organization</Text>
        </Content>
        </Row>
        </Grid>



        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Advoc8 Maid 😂</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Success;
