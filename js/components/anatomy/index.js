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
  Input,
  Navigator,
  List,
  ListItem,
  CheckBox
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import styles from "./styles";

const datas = [
  {
    route: "Success",
    text: "Success"
  }
];

class Anatomy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      },
      checkbox4: false,
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }

  toggleSwitch4() {
		this.setState({
			checkbox4: !this.state.checkbox4,
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
            <Picker
              note
              iosHeader="Filter Harrasment"
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
              style={{ top:10,bottom:10,left:10,paddingRight: 30 }}
            >
              <Item label="Psyhological" value="key0" />
              <Item label="Sexual" value="key1" />
              <Item label="Religious" value="key2" />
              <Item label="Violence" value="key3" />
            </Picker>
            <Item floatingLabel>
              <Label>Location</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Your Feedback</Label>
              <Input />
            </Item>
            <ListItem button onPress={() => this.toggleSwitch4()}>
  						<CheckBox color="blue" checked={this.state.checkbox4} onPress={() => this.toggleSwitch4()} />
  						<Body>
  							<Text>Send as anonymously</Text>
  						</Body>
  					</ListItem>
          </Form>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
              style={{flex:1, flexDirection:'column', justifyContent:'center',backgroundColor:'blue',right:10}}
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Text style={{color:'white'}}>Submit</Text>
              </ListItem>}
          />

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

export default Anatomy;
