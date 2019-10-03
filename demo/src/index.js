import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import {
  Avatar,
  Button,
  Collapse,
  Dropdown,
  FlatButton,
  Form,
  GhostButton,
  LoadingButton,
  ProgressBar,
  Profile,
  Tabs,
  Tab,
  Radio,
  RadioGroup,
  SimpleRedButton,
  SocialIcon,
  Searchbar,
  TwitterShare,
  Header,
  ExtendedText,
  Checkbox,
  Switch,
  Notification,
  StickyButton,
  Datepicker
} from "../../src/index";

const Tab1 = () => {
  return <div>Tab1</div>;
}

const Tab2 = () => {
  return <div>Tab2</div>;
}

class Demo extends Component {
  handleItemClick(item) {
    window.alert("You selected : " + item);
  };

  state = {
    checked: false,
    value: ""
  };
  handleChange2 = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    window.alert("You submit the value : " + this.state.value);
  };
  render() {
    const items = ['One', 'Two', 'Three']
    const handleChange1 =  ()=> {
      console.log("abcd");
    };

    let options = [
      {
        id: 1,
        label: 'Cat'
      },
      {
        id: 2,
        label: 'Dog'
      },
      {
        id: 2,
        label: 'Monkey'
      },
    ]

    return (
      <div className="main-container">
        <div className="inner-container">
            <Avatar src='https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png' />

            <Button
              text={"best button ever"}
              size="medium"
              styles={{ color: "white" }}
              buttonColor="blue"
              handleClick={() => alert("hello world")}
            />
      
            <Collapse collapseHeader={'Click me'} collapseBody={'Sup, dude!'} />
       
            <Dropdown menuItems={items} onItemClick={this.handleItemClick} />
        
            <ExtendedText
              characterAmount={10}
              text={
                "This is a sample display text that can be expanded to view in its entirety by clicking read more."
              }
            />

            <div>
              <h2>Flat Buttons</h2>
              <FlatButton
                text={"best button ever"}
                size="small"
                buttonColor="red"
                handleClick={() => alert("Flatted world")}
              />
            
          
              <FlatButton 
                text={'best button ever'} 
                size='small' 
                buttonColor='green' 
                handleClick = {() => alert('Flatted world')} />
              <div className="space"/>
            </div>
         
            <Form fields={["input", "textarea", "button"]} />
          
            <div>
              <h2>Ghost Buttons</h2>
                <GhostButton buttonColor='red' text={"Spooky Button"} size='small' handleClick = {() => alert('Boo!')} />
                <br />
              
                <GhostButton buttonColor='green' text={"Spooky Button"} size='small' handleClick = {() => alert('Boo!')} />
                <div className="space"/>
            </div>


            <div>
              <h2>Header Component</h2>
              <Header brandName={"My Awesome Site"} />
              <div className="space"/>
            </div>
          
            <div>
              <h2>Loading Button Component</h2>
              Loading = 
              <LoadingButton loading={true}/>
              <br />
              Not Loading =
              <LoadingButton/>
              <div className="space"/>
            </div>
         
            <div>
              <h2>Notification</h2>
              <Notification number={10} color={"red"} />
              <br />
              <Notification number={10} color={"blue"} />

              <div className="space"/>
            </div>

            <Profile
              name={"Joshua"}
              image={{
                sourceType: "url",
                location:
                  "https://avatars2.githubusercontent.com/u/52901917?s=88&v=4"
              }}
              bio={"Full Stack Engineer"}
              link={{
                source: "https://github.com/Joshua-Burleson",
                text: "GitHub"
              }}
              socials={[
                { name: "facebook", source: "https://www.facebook.com/zuck" }
              ]}
            />
          

            <ProgressBar progress={9}
              fillColor={'red'}
              containerClassName='container-style'
              containerStyle={{
                justifyContent: 'center',
                height: 50,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: 'black'
              }} />
      
            <div>
              <h2>Radio Buttons</h2>
              <RadioGroup name="xx" selectedValue="Orange" onChange={handleChange1}>
                <Radio value="Orange" />
                <Radio value="Apple" />
              </RadioGroup>
              <div className="space"/>
            </div>
     
            <Searchbar
              value={this.state.value}
              onChange={this.handleChange2}
              onSubmit={this.handleSubmit}
            />
       
          
            <SimpleRedButton text={"Shiney Red Button"}/>
         
            <TwitterShare message="Hi" size="md"/>
        
            <div>
              <h2>Sticky Button</h2>
              <StickyButton text={'Go to Top'} buttonColor='blue' size='sm' behavior='smooth' styles={{color: "#FFFFFF"}}/>
              <div className="space"/>
            </div>

            <div>
              <h2>Social Icon Component</h2>
              <SocialIcon name={"twitter"} />
              <SocialIcon name={"facebook"} />
              <div className="space"/>
            </div>
        
            <div>
              <h2>Switch Component</h2>
              <Switch
                value="Switch 1"
                checked={!this.state.checked}
                onClick={this.handleChecked}
              />
            
              <Switch
                value="Switch 2"
                checked={this.state.checked}
                onClick={this.handleChecked}
              />
              <div className="space"/>
            </div>
              
            <div>
              <h2>Tab Component</h2>
              <Tabs defaultTab={0}>
                <Tab component={Tab1} title="Default Tab" />
                <Tab component={Tab2} title="Tab 2" />
              </Tabs>
              <div className="space"/>
            </div>
          

            <Checkbox options={options} onClick={this.handleChange2} title="Animals"/>

            <Datepicker/>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
