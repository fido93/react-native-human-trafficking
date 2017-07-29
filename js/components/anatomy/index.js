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
  Form,
  Item,
  Label,
  Input
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import styles from "./styles";

class Anatomy extends Component {
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
            <Title>Report Form</Title>
          </Body>
          <Right />

        </Header>

        <Grid>
        <Row style={{ backgroundColor: "#ffffff" }}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Image</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Filter</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Location</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Your Feedback</Label>
              <Input />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
        </Content>
        </Row>
        </Grid>



        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Anatomy;
