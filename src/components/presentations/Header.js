import React from 'react'
import {AppBar, Menu, MenuItem, Drawer, Divider, Avatar, Subheader,
List, ListItem, DropDownMenu} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

const Header = ({app_bar_open, groups, selected_group_id, years, selected_year,
                 onClickAppBar, group_select_open, onClickGroup, onClickYear, onClickIssueList}) => {
  //AppBarのスタイル
  const style = {
    // position: 'fixed', top: 100,
  }

  return (
    <div>
      <MuiThemeProvider>
        <Drawer
          docked={false}
          width={200}
          open={app_bar_open}
          onRequestChange={() => onClickAppBar()}
        >
          <Subheader>Group</Subheader>
          <DropDownMenu value={selected_group_id} onChange={(event, index, value) => onClickGroup(value)}>
            {groups.map(group => <MenuItem value={group.id} primaryText={group.name} />)}
          </DropDownMenu>
          <DropDownMenu value={selected_year} onChange={(event, index, value) => onClickYear(value)}>
            {years.map(years => <MenuItem value={years} primaryText={years} />)}
          </DropDownMenu>
          <Divider />
          <Menu>
              <Link to='/issue'><MenuItem onClick={(event) =>
                onClickIssueList(event)} key="1" value="1">案件一覧</MenuItem></Link>
              <Link to='/member'><MenuItem key="2" value="2">要員別山積表</MenuItem></Link>
          </Menu>
        </Drawer>
        <AppBar
          title="Red Muffin"
          iconElementRight={<Avatar src="food.svg" />}
          onLeftIconButtonClick={() => onClickAppBar()}
          style={style}
        />
      </MuiThemeProvider>
    </div>
  )

}

export default Header

// onLeftIconButtonTouchTap={() => onClickAppBar()}
// <Link to='/member'><MenuItem key="3" value="3">要員別集計情報</MenuItem></Link>

// <List>
//   <ListItem
//     disabled={false}
//     leftAvatar={
//       <Avatar src="GP_ankou.png" />
//     }
//     onClick={console.log(groups)}
//   >
//     あんこうチーム
//   </ListItem>
// </List>
