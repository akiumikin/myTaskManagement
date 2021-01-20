import React from 'react';
import Link from 'next/link';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputIcon from '@material-ui/icons/Input';
import PersonIcon from '@material-ui/icons/Person';

interface MainListItemProps extends SubListItemProps {
  icon: React.ReactNode
}

function MainListItem(props: MainListItemProps) {
  return(
    <Link href={props.to}>
      <ListItem button style={{paddingTop: 0, paddingBottom: 0}}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.title}/>
      </ListItem>
    </Link>
  )
}

interface SubListItemProps {
  to: string
  title: string
}

function SubListItem(props: SubListItemProps) {
  return(
    <Link href={props.to}>
      <ListItem button style={{paddingTop: 0, paddingBottom: 0}}>
        <ListItemText secondary={props.title} style={{marginLeft: 70}}/>
      </ListItem>
    </Link>
  )
}

export function Sidemenu() {
  return (
    <>
      <List>
        <MainListItem to='/about' title='about' icon={<PersonIcon/>}/>
      </List>
      <Divider />
      <List>
        <MainListItem to='/form' title='input form' icon={<InputIcon/>}/>
        <SubListItem to='/form/text' title='text'/>
        <SubListItem to='/form/radio' title='radio'/>
        <SubListItem to='/form/checkbox' title='checkbox'/>
      </List>
      <Divider />
      <List>
        <MainListItem to='/others' title='others content' icon={<PersonIcon/>}/>
      </List>
    </>
  );
}
