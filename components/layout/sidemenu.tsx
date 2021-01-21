import React from 'react';
import Link from 'next/link';
import { CONSTANT } from '../../constant'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputIcon from '@material-ui/icons/Input';
import PersonIcon from '@material-ui/icons/Person';
import CategoryIcon from '@material-ui/icons/Category';

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
        <MainListItem to={`${CONSTANT.URL.BASE}/about`} title='about' icon={<PersonIcon/>}/>
      </List>
      <Divider />
      <List>
        <MainListItem to={`${CONSTANT.URL.BASE}/form`} title='input form' icon={<InputIcon/>}/>
        <SubListItem to={`${CONSTANT.URL.BASE}/form/text`} title='text'/>
        <SubListItem to={`${CONSTANT.URL.BASE}/form/radio`} title='radio'/>
        <SubListItem to={`${CONSTANT.URL.BASE}/form/checkbox`} title='checkbox'/>
      </List>
      <Divider />
      <List>
        <MainListItem to={`${CONSTANT.URL.BASE}/others`} title='others content' icon={<CategoryIcon/>}/>
        <SubListItem to={`${CONSTANT.URL.BASE}/others/avoidSSR`} title='avoid SSR'/>
        <SubListItem to={`${CONSTANT.URL.BASE}/others/prismjs`} title='prism.js'/>
        <SubListItem to={`${CONSTANT.URL.BASE}/others/quill`} title='quill'/>
      </List>
    </>
  );
}
