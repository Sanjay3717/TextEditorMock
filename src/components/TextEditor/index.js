import {Component} from 'react'

import {AiOutlineUnderline} from 'react-icons/ai'

import {GoItalic} from 'react-icons/go'

import {VscBold} from 'react-icons/vsc'

import {
  AppContainer,
  TextEditorContainer,
  LeftContainer,
  Heading,
  Image,
  RightContainer,
  UnorderedList,
  ListItem,
  Button,
  TextArea,
} from './styledComponents'

import './index.css'

/* const styleClicked={

  bold:"BOLD",

  italic:"ITALICS"

  underline:"UNDERLINE"

} */

class TextEditor extends Component {
  state = {
    bold: false,

    italic: false,

    underline: false,

    color: 'changeColor',
    textContent: '',
  }

  onBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onItalics = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  onUnderline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  OnValueChange = event => {
    this.setState({textContent: event.target.value})
  }

  render() {
    const {bold, italic, underline, color, textContent} = this.state

    const isBold = bold ? 'bold' : null

    const isItalic = italic ? 'italics' : null

    const isUnderline = underline ? 'underline' : null

    const boldClicked = bold ? 'isClicked' : null

    const italicClicked = italic ? 'isClicked' : null

    const underLineClicked = underline ? 'isClicked' : null

    return (
      <AppContainer>
        <TextEditorContainer>
          <LeftContainer>
            <Heading>Text Editor</Heading>

            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>

          <RightContainer>
            <UnorderedList>
              <ListItem>
                <Button
                  type="button"
                  style={{color: '#f1f5f9'}}
                  className={`btn-style ${boldClicked}`}
                  data-testid="bold"
                >
                  <VscBold onClick={this.onBold} size={25} />
                </Button>
              </ListItem>

              <ListItem>
                <Button
                  type="button"
                  style={{color: '#f1f5f9'}}
                  data-testid="italic"
                  onClick={this.onItalics}
                >
                  <GoItalic
                    className={`btn-style ${italicClicked}`}
                    size={25}
                  />
                </Button>
              </ListItem>

              <ListItem>
                <Button
                  type="button"
                  style={{color: '#f1f5f9'}}
                  data-testid="underline"
                  onClick={this.onUnderline}
                >
                  <AiOutlineUnderline
                    className={`btn-style ${underLineClicked}`}
                    size={25}
                  />
                </Button>
              </ListItem>
            </UnorderedList>

            <TextArea
              rows="10"
              cols="50"
              className={`text-area ${isBold} ${isItalic} ${isUnderline}`}
              value={textContent}
              onChange={this.OnValueChange}
            />
          </RightContainer>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
