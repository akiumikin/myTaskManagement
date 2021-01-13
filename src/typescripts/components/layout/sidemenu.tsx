import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputIcon from '@material-ui/icons/Input';
import PersonIcon from '@material-ui/icons/Person';

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

interface MainListItemProps extends SubListItemProps {
  icon: React.ReactNode
}

function MainListItem(props: MainListItemProps) {
  return(
    <ListItemLink href={props.to}>
      <ListItem button style={{paddingTop: 0, paddingBottom: 0}}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.title}/>
      </ListItem>
    </ListItemLink>
  )
}

interface SubListItemProps {
  to: string
  title: string
}

function SubListItem(props: SubListItemProps) {
  return(
    <ListItemLink href={props.to} style={{paddingTop: 0, paddingBottom: 0}}>
      <ListItem button style={{paddingTop: 0, paddingBottom: 0}}>
        <ListItemText secondary={props.title} style={{marginLeft: 70}}/>
      </ListItem>
    </ListItemLink>
  )
}

export function Sidemenu() {
  return (
    <>
      <List>
        <MainListItem to='/' title='about' icon={<PersonIcon/>}/>
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
        <MainListItem to='/' title='about' icon={<PersonIcon/>}/>
      </List>
    </>
  );
}
