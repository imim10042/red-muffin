import React, { Component } from 'react'
import {TextField, FlatButton, SelectField, MenuItem, Dialog, CircularProgress} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

export default class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      register_form: {
        kind: 0,
        ankenname: "",
        estimate: 0,
        register_processing: false
      }
    }
  }

  styles = {
    path: {
      margin: 12,
      fontSize: 12,
      color: "#9E9E9E",
    }
  }

  //Form入力
  onChange1 = (event, key, payload) => {
    this.setState({
      register_form: {
        ...this.state.register_form,
        kind: key
      }
    })
  }

  onChange2 = (event, value) => {
    this.setState({
      register_form: {
        ...this.state.register_form,
        ankenname: value
      }
    })
  }

  onChange3 = (event, value) => {
    this.setState({
      register_form: {
        ...this.state.register_form,
        estimate: value
      }
    })
  }

  //SUBMIT
  onClick1 = event => {
    this.setState({register_processing: true})
  }

  onClick2 = event => {
    this.setState({register_processing: false})
    this.props.onClickRegisterSubmit(this.state.register_form)
  }

  render() {
    const actions = [
      <Link to='/issue'>
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.onClick2}
        />
      </Link>,
    ]

    return (
      <div>
        <div style={this.styles.path} ><Link to={`/`}>Home</Link> > <Link to={`/issue`}>案件一覧</Link> > 案件情報登録</div>
        <MuiThemeProvider>
          <SelectField
            floatingLabelText="分類"
            onChange={this.onChange1}
            value={this.state.register_form.kind}
          >
            <MenuItem value={0} primaryText="開発委託" />
            <MenuItem value={1} primaryText="作業依頼" />
            <MenuItem value={2} primaryText="障害対応(無償)" />
            <MenuItem value={3} primaryText="常駐支援" />
            <MenuItem value={4} primaryText="その他無償作業" />
          </SelectField><br />
          <TextField
            floatingLabelText="案件名称"
            onChange={this.onChange2}
          /><br />
          <TextField
            floatingLabelText="見積工数"
            onChange={this.onChange3}
          /><br />
          <Link to='/issue'>
            <FlatButton
              label="Cancel"
              primary={true}
            />
          </Link>
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.onClick1}
            />
            <Dialog
              title="Loading..."
              actions={actions}
              modal={true}
              open={this.state.register_processing}
            >
              <p>This is a mock indicator. Please push SUBMIT to close windows.</p>
              <CircularProgress size={80} thickness={7} />
            </Dialog>
        </MuiThemeProvider>
      </div>
    )
  }

}
