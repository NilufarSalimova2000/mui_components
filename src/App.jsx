import React from "react";
import { Button, Container, Tab, Tabs, TextField, Slider, Typography, IconButton, Input} from "@mui/material";
import { Badge} from "./style";
import { CustomButton, CustomLInkButton } from "./components/ui/button/button";
import { Table } from "./components/ui/table";
import { UserIcon } from "./assets/icons/user";

function App() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Button variant="contained">Смотреть все</Button>
        <Button variant="outlined">Смотреть все</Button>
        <Button variant="text">Смотреть все</Button>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
        <TextField size="small" variant="outlined" placeholder="lorem" />
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Typography variant="h4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nisi iure, quos voluptates dolorem culpa veniam explicabo similique eveniet quis neque ullam? Fuga fugiat nesciunt libero qui sequi. Magnam, debitis.</Typography>
        <Typography variant="h2">Новинки</Typography>
        <Typography variant="h2">Скидки</Typography>
        <Badge>Новинка</Badge>
        <CustomButton>Смотреть все</CustomButton>
        <CustomLInkButton>Все новинки</CustomLInkButton>
        <Table />
        <IconButton><UserIcon/></IconButton>
        <Typography variant="body1">Aster Q893A LVIZON LVIZON</Typography>
        <Typography variant="h1">Новая коллекция ковров Venetta</Typography>
        <Input placeholder="Поиск по товарам" />
      </Container>
    </>
  )
}

export default App
