import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdClose, MdRemove, MdAdd } from "react-icons/md";

const Cart_prod_card = () => {
  const [count, setCount] = useState(1);
  if (count < 1) setCount(1);
  useEffect(() => {}, [count]);
  return (
    <VStack padding={"10px"} borderBottom={"1px solid #a4a4a6"}>
      <HStack justifyContent={"space-between"} width={"100%"} gap={"3"}>
        <Text alignSelf={"start"} fontWeight={"700"} fontSize={"16px"}>
          Chicken Thigh Boneless
        </Text>
        <MdClose cursor={"pointer"} color="black" size={"20px"} />
      </HStack>
      <HStack width={"100%"} gap={"2"} justifyContent={"space-between"}>
        <HStack width={"50%"} justifyContent={"flex-start"}>
          <Text
            fontSize={"14px"}
            padding={"5px"}
            border={"1px solid #a4a4a6"}
            color={"#a4a4a6"}
            borderRadius={"5px"}
          >
            450gms
          </Text>
          <Text fontSize={"14px"} fontWeight={"600"} color={"#d11243"}>
            ₹370
          </Text>
          <Text fontSize={"13px"} textDecoration={"line-through"}>
            ₹370
          </Text>
        </HStack>
        <HStack>
          <MdRemove
            cursor={"pointer"}
            color="#d11243"
            size={"18px"}
            onClick={() => setCount(count - 1)}
          />
          <Text
            fontWeight={600}
            bg={"#f2f2f2"}
            padding={"5px 12px"}
            fontSize="14px"
          >
            {count}
          </Text>
          <MdAdd
            fontWeight={"700"}
            cursor={"pointer"}
            color="#d11243"
            onClick={() => setCount(count + 1)}
            size={"18px"}
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Cart_prod_card;
