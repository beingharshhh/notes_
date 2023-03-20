import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Drawer, FormControl, FormControlLabel, FormLabel, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Radio, RadioGroup, TextField, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import CheckedIcon from './CheckedIcon';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createGroup } from '../features/addGroupSlice';


const drawerWidth = 300;

const avatarColor = () => {
    const dispatch = useDispatch();
    let groups = JSON.parse(localStorage.getItem('groups'))
    const [open, setOpen] = useState(false)
    const [avatarColor, setAvatarColor] = useState('#B38BFA');
    const [groupName, setGroupName] = useState('');

    const handleChange = (e) => {
        setAvatarColor(e.target.value)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        dispatch(createGroup({ _id: uuidv4(), avatarColor, groupName }))
        setOpen(false)
    }

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar sx={{ display: 'flex', flexDirection: 'column', gap: '22px', my: 2 }}>
                    <Typography variant='h5' sx={{ fontWeight: '500', alignSelf: 'flex-start' }}>Pocket Notes</Typography>
                    <Button
                        onClick={handleOpen}
                        fullWidth
                        variant='contained'
                        sx={{ background: '#000000', borderRadius: '18px', '&:hover': { background: '#363636' } }}
                        startIcon={<AddIcon />}
                    >
                        Create Notes
                    </Button>
                </Toolbar>
                <Divider />
                <List sx={{ width: '100%' }}>
                    {!groups ? null :
                        groups.map((e) => (
                            <ListItem key={e._id}>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar sx={{ background: e.avatarColor }}>{(e.groupName[0] + e.groupName[1]).toUpperCase()}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={e.groupName} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Create Group</DialogTitle>
                <DialogContent>
                    <FormControl margin='normal' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
                        <FormLabel sx={{ color: '#000000' }}>Group Name</FormLabel>
                        <TextField
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            size='small'
                            margin='normal'
                            placeholder='Enter your group name...'
                            InputProps={{
                                style: {
                                    width: '20rem',
                                    borderRadius: '22px',
                                },
                            }}
                            sx={{ '& .Mui-focused': { border: '1px solid #000000' } }}
                        />
                    </FormControl>
                    <FormControl margin='normal' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
                        <FormLabel sx={{ color: '#000000' }}>Choose Color</FormLabel>
                        <RadioGroup
                            row
                            name='choose-color'
                            value={avatarColor}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value='#B38BFA'
                                control={<Radio icon={<CheckedIcon background='#B38BFA' />} checkedIcon={<CheckedIcon background='#833dff' />} />}
                            />
                            <FormControlLabel
                                value='#FF79F2'
                                control={<Radio icon={<CheckedIcon background='#FF79F2' />} checkedIcon={<CheckedIcon background='#ff40ed' />} />}
                            />
                            <FormControlLabel
                                value='#43E6FC'
                                control={<Radio icon={<CheckedIcon background='#43E6FC' />} checkedIcon={<CheckedIcon background='#02b2c9' />} />}
                            />
                            <FormControlLabel
                                value='#F19576'
                                control={<Radio icon={<CheckedIcon background='#F19576' />} checkedIcon={<CheckedIcon background='#ff6633' />} />}
                            />
                            <FormControlLabel
                                value='#0047FF'
                                control={<Radio icon={<CheckedIcon background='#0047FF' />} checkedIcon={<CheckedIcon background='#0233b3' />} />}
                            />
                            <FormControlLabel
                                value='#6691FF'
                                control={<Radio icon={<CheckedIcon background='#6691FF' />} checkedIcon={<CheckedIcon background='#1f5eff' />} />}
                            />
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button
                        sx={{ px: 5, background: '#000000', color: '#fff', borderRadius: '18px', '&:hover': { background: '#363636' } }}
                        onClick={handleClose}
                    >
                        Create Group
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default avatarColor