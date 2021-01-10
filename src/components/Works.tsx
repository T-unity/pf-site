import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 770,
    maxWidth: '100%',
  },
}));

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Works: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Works
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <List className={classes.root}>
            
            <ListItem>
              <ListItemLink href='https://circle-work.net'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='ポートフォリオ' secondary='Ruby2.7,Rails6.0で作成したポートフォリオサイトです。' />
              </ListItemLink>
            </ListItem>

            <ListItem>
              <ListItemLink href='https://github.com/T-unity/manga-asi'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='ポートフォリオサイトのGithub' secondary='上記ポートフォリオサイトのコードです。' />
              </ListItemLink>
            </ListItem>

            <ListItem>
              <ListItemLink href='https://github.com/T-unity/-algorithm'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Rubyの学習記録' secondary='フレームワークを用いてちょっとしたアプリを作れるようにはなってきましたが、コーディング力が弱いと感じているので毎日チェリー本を読みながら地味に勉強を進めています。' />
              </ListItemLink>
            </ListItem>

          </List>
        </Box>
      </Box>
    </>
  );
}

export default Works;