import { Box } from "@chakra-ui/react";
import React from "react";

const Card = ({backgroundColor, width, height, padding, margin, boxShadow, children }) => {
    return (
        <Box
            backgroundColor={backgroundColor}
            borderRadius={"12px"}
            width={width}
            height={height}
            padding={padding}
            margin={margin}
            boxShadow={boxShadow}
        >
            {children}
        </Box>
    );
};

export default Card;
