import { extendTheme } from "@chakra-ui/react";
import { ButtonsStyles as Button } from "./buttonsStyles";
import { useColorModeValue } from "@chakra-ui/react";

const components = { Button };
const styles = {
    global: (props) => ({
      body: {
        bg: useColorModeValue('#FFFFFF', '#FFFFFF')
      }
    })
  }
const values = { components, styles };

export const theme = extendTheme(values);