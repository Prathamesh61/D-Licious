import { Image } from "@chakra-ui/react";
import React from "react";

const Logo = ({margin}) => {
    return (
        <>
            <Image margin={margin} width={"200px"} src="https://user-images.githubusercontent.com/89634533/200657592-3bf0ef24-c714-4ffd-882f-dbbaf247fbb1.png " />
        </>
    );
};

export default Logo;
