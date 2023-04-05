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
import useForms, { Form } from "../hooks/useForms";

interface Props {
  onSelectForm: (form: Form) => void;
  selectedForm: Form | null;
}

const FormsList = ({ onSelectForm, selectedForm }: Props) => {
  const { forms, error, isLoading } = useForms();

  const isInactive = (form: Form): boolean => {
    const start = new Date(form.StartDate);
    const end = new Date(form.EndDate);
    const today = new Date();
    return start <= today && today < end;
  };

  return (
    <>
      <Heading justifyContent={"left"} marginBottom={3} fontSize="2xl">
        Forms
      </Heading>

      <List>
        {forms.map((form) => (
          <ListItem key={form.Name}>
            <HStack>
              <Image
                boxSize="28px"
                borderRadius={8}
                src={isInactive(form) ? thumbsUp : inactive}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  form.Name === selectedForm?.Name ? "bold" : "normal"
                }
                onClick={() => onSelectForm(form)}
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
