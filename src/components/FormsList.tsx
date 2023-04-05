import {
  Heading,
  List,
  ListItem,
  Text,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";

import inactive from "../assets/hibernation.png";
import thumbsUp from "../assets/thumbs-up.webp";
import useForms from "../hooks/useForms";

interface Form {
  Name: string;
  Description: string;
  hash: string;
  isPublic: string;
  Url: string;
  StartDate: Date;
  EndDate: Date;
}
const FormsList = () => {
  const { forms, error, isLoading } = useForms();

  const isInactive = (form: Form): boolean => {
    const start = new Date(form.StartDate);
    const end = new Date(form.EndDate);
    const today = new Date();
    return start <= today && today < end;
  };

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Forms
      </Heading>

      <List>
        {forms.map((form) => (
          <ListItem key={form.hash}>
            <HStack>
              <Image
                boxSize="28px"
                borderRadius={8}
                src={isInactive(form) ? thumbsUp : inactive}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                // fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => console.log(form.Name, form.EndDate)}
                fontSize="lg"
                variant="link"
              >
                {form.Name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default FormsList;
