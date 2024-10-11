import React from "react";
import { Button, Container, Tab, Tabs, TextField, Slider, Typography} from "@mui/material";
import { Badge} from "./style";
import { CustomButton, CustomLInkButton } from "./components/ui/button/button";
import { SpecificationsTable } from "./components/ui/info";

function App() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="xl">
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
        <SpecificationsTable />
      </Container>
    </>
  )
}

export default App
