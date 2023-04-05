import { useState } from "react";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import FormsList from "./components/FormsList";
import { Form } from "./hooks/useForms";

function App() {
  const [count, setCount] = useState(0);
  const [selectedForm, setSelectedForm] = useState<Form | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "nav main" "nav footer"`,
      }}
      // gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"350px 1fr"}
      // h="200px"
      // gap="1"
      // color="blackAlpha.700"
    >
      <GridItem pl="2" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" area={"nav"}>
        <FormsList
          selectedForm={selectedForm}
          onSelectForm={(form) => setSelectedForm(form)}
        />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
