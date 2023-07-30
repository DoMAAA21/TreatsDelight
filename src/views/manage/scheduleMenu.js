// MenuScheduler.js
import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    IconButton,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    CardHeader,
    Modal,
} from '@mui/material';
import { Icon } from '@iconify/react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];

const MenuScheduler = () => {
    const [menu, setMenu] = useState({
        Monday: { items: ['Caldereta', 'Chicken Fillet', 'Adobo', 'Pork Chop'], isOpen: true },
        Tuesday: { items: ['Menudo', 'Chicken Fillet', 'Adobo', 'Pork Chop'], isOpen: true },
        Wednesday: { items: ['Caldereta', 'Fish Fillet', 'Adobo', 'Pork Chop'], isOpen: true },
        Thursday: { items: ['Caldereta', 'Chicken Fillet', 'Adobo', 'Pork Chop'], isOpen: true },
        Friday: { items: ['Caldereta', 'Chicken Fillet', 'Menudo', 'Pork Chop'], isOpen: true },
        Saturday: { items: ['Caldereta', 'Chicken Fillet', 'Menudo', 'Pork Chop'], isOpen: true },
        Sunday: { items: ['Caldereta', 'Chicken Fillet', 'Menudo', 'Pork Chop'], isOpen: true },
    });

    const [editDay, setEditDay] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editedMenu, setEditedMenu] = useState([]);
    const [newMenuItem, setNewMenuItem] = useState('');
    const [isDayOpen, setIsDayOpen] = useState(true);

    const handleMenuItemChange = (index, value) => {
        setEditedMenu((prevMenu) => {
            const updatedMenu = [...prevMenu];
            updatedMenu[index] = value;
            return updatedMenu;
        });
    };

    const handleEditDay = (day) => {
        setEditedMenu(menu[day].items);
        setIsDayOpen(menu[day].isOpen);
        setEditDay(day);
        setEditModalOpen(true);
    };

    const handleModalClose = () => {
        setEditModalOpen(false);
        setNewMenuItem('');
    };

    const handleSaveChanges = () => {
        setMenu((prevMenu) => ({
            ...prevMenu,
            [editDay]: { items: editedMenu, isOpen: isDayOpen },
        }));
        setEditModalOpen(false);
        setNewMenuItem('');
    };

    const handleAddMenuItem = () => {
        setEditedMenu((prevMenu) => [...prevMenu, newMenuItem]);
        setNewMenuItem('');
    };

    const handleToggleDay = () => {
        setIsDayOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h5" align="center" gutterBottom>
                Canteen Menu Scheduler
            </Typography>

            <Grid container spacing={2}>
                {daysOfWeek.map((day) => (
                    <Grid key={day} item xs={12} sm={6}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: menu[day].isOpen ? '#c3e6cb' : '#f8d7da',
                            }}
                        >
                            <CardHeader
                                title={<Typography variant="h6">{day}</Typography>}
                                action={
                                    <IconButton onClick={() => handleEditDay(day)}>
                                        <Icon icon="uil:edit" />
                                    </IconButton>
                                }
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                {menu[day].items.map((item, index) => (
                                    <Typography key={index}>{item}</Typography>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Modal open={editModalOpen} onClose={handleModalClose}>
                <Card
                    sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', p: 2 }}
                >
                    <CardContent>
                        <CardHeader
                            title={<Typography variant="h6">Edit Menu for {editDay}</Typography>}
                            action={
                                <>
                                    <IconButton onClick={handleToggleDay}>
                                        {isDayOpen ? <Icon icon="material-symbols:toggle-on" color="skyblue" height={35} width={35} /> : <Icon icon="material-symbols:toggle-off-outline" height={35} width={35} />
                                        }
                                    </IconButton>
                                </>}

                        />


                        {editedMenu.map((item, index) => (
                            <TextField
                                key={index}
                                variant="outlined"
                                fullWidth
                                value={item}
                                onChange={(e) => handleMenuItemChange(index, e.target.value)}
                            />
                        ))}
                        <TextField
                            id="add-menu"
                            label="Add"
                            value={newMenuItem}
                            fullWidth
                            onChange={(e) => setNewMenuItem(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <Button variant="contained" onClick={handleAddMenuItem}>
                                        Add
                                    </Button>
                                ),
                            }}
                        />
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={handleSaveChanges}>
                            Save Changes
                        </Button>
                        <Button variant="contained" onClick={handleModalClose}>
                            Cancel
                        </Button>

                    </CardActions>
                </Card>
            </Modal>
        </Container>
    );
};

export default MenuScheduler;
