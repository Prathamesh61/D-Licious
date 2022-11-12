import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Radio,
  Text,
  Slider,
  SliderMark,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  HStack,
  VStack,
  Image,
  RadioGroup,
  Stat,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { useToast } from "@chakra-ui/react";
import Checkout_cart_prod_card from "./Checkout_cart_prod_card";
import Address_card from "../Address_card";
import axios from "axios";
import { getCartData } from "../../Redux/ProfileRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Button
        variant="outline"
        width={["100%", "80%", "60%"]}
        colorScheme={"red"}
      >
        {" "}
        + Add New Address
      </Button>
      <Text fontWeight={"bold"} fontSize={"20px"} alignSelf={"start"}>
        Saved Addresses
      </Text>
      <Text fontSize={"16px"} alignSelf={"start"}>
        1 Saved Addresses
      </Text>
      <Text alignSelf={"start"}></Text>
      <RadioGroup
        defaultValue="1"
        justifyContent={"start"}
        alignItems={"start"}
      >
        <VStack mt="2%">
          <Radio value={"1"} mt="2%" colorScheme={"red"}>
            <Address_card />
          </Radio>
          <Radio value={"2"} mt="2%" colorScheme={"red"}>
            <Address_card />
          </Radio>
        </VStack>
      </RadioGroup>
    </>
  );
};
const Form2 = () => {
  let date = new Date();
  let current_time = date.getHours();
  let converted = current_time > 12 ? current_time - 12 : current_time;
  return (
    <>
      <Text>1 Item Delivered Today in </Text>
      <Select
        cursor={"pointer"}
        borderColor={"#d11243"}
        placeholder="Select Duration"
      >
        <option>
          {" "}
          {(converted >= 12 ? converted - 12 : converted) + 2}PM -{" "}
          {(converted >= 12 ? converted - 12 : converted) + 4}pm
        </option>
        <option>
          {" "}
          {(converted >= 12 ? converted - 12 : converted) + 4}PM -{" "}
          {(converted >= 12 ? converted - 12 : converted) + 6}pm
        </option>
        <option>
          {" "}
          {(converted >= 12 ? converted - 12 : converted) + 6}PM -{" "}
          {(converted >= 12 ? converted - 12 : converted) + 8}pm
        </option>
      </Select>
      <br />
      <Box
        padding={"2"}
        height={"250px"}
        overflowY={"auto"}
        borderRadius={"5px"}
      >
        <Checkout_cart_prod_card />
        <Checkout_cart_prod_card />
      </Box>
    </>
  );
};

const Form3 = () => {
  const [PaymentMethod, setPaymentMethod] = useState("");
  return (
    <>
      <HStack justifyContent={"flex-start"} alignItems={"flex-start"}>
        <VStack
          spacing={"0px"}
          gap={"-5px"}
          margin={"0"}
          borderRadius={"0"}
          width={"40%"}
        >
          <Box
            cursor={"pointer"}
            width={"100%"}
            textAlign="start"
            color="#d4224f"
            onClick={() => setPaymentMethod("UPI")}
            boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            borderRadius={"0"}
            padding={"5px 10px"}
          >
            Pay Using UPI
          </Box>
          <Box
            cursor={"pointer"}
            width={"100%"}
            textAlign="start"
            color="#d4224f"
            onClick={() => setPaymentMethod("CARD")}
            boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            borderRadius={"0"}
            padding={"5px 10px"}
          >
            Credit/Debit Cards
          </Box>
          <Box
            cursor={"pointer"}
            width={"100%"}
            textAlign="start"
            color="#d4224f"
            onClick={() => setPaymentMethod("NET")}
            boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            borderRadius={"0"}
            padding={"5px 10px"}
          >
            Netbanking
          </Box>
        </VStack>
        <Box
          boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          borderRadius={"5px"}
          width={"100%"}
        >
          {PaymentMethod == "CARD" ? (
            <CARD />
          ) : PaymentMethod == "NET" ? (
            <NET />
          ) : (
            <UPI />
          )}
        </Box>
      </HStack>
    </>
  );
};
const UPI = () => {
  return (
    <Box padding={"8px"}>
      <Text
        w="100%"
        fontSize={"2xl"}
        textAlign={"start"}
        fontWeight="normal"
        mb="2%"
      >
        Pay Using UPI
      </Text>
      <Flex flexWrap={"wrap"} width={"100%"} gap={"3"}>
        <Box
          borderRadius={"5px"}
          boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          width={"fit-content"}
        >
          <Image
            w={"30%"}
            src="https://d2407na1z3fc0t.cloudfront.net/Banner/GPay@3x.png"
          />
        </Box>
        <Box
          borderRadius={"5px"}
          boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          width={"fit-content"}
        >
          <Image
            w={"30%"}
            src="https://d2407na1z3fc0t.cloudfront.net/Banner/More%20UPI@3x.png"
          />
        </Box>
        <Box
          borderRadius={"5px"}
          boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          width={"fit-content"}
        >
          <Image
            w={"30%"}
            src="https://d2407na1z3fc0t.cloudfront.net/Banner/Phonepe@3x.png"
          />
        </Box>
        <Box
          borderRadius={"5px"}
          boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          width={"fit-content"}
        >
          <Image
            w={"30%"}
            src="https://d2407na1z3fc0t.cloudfront.net/Banner/PaytmUPI@3xNew.png"
          />
        </Box>
      </Flex>
      <br />
      <Button alignContent={"center"} bg="#d11243" color={"white"}>
        Pay ₹370{" "}
      </Button>
    </Box>
  );
};
const Stats = () => {
  return (
    <Box padding={"8px"} border={"1px solid red"}>
      <Text
        w="100%"
        fontSize={"xl"}
        textAlign={"start"}
        fontWeight="bold"
        mb="2%"
      >
        Bill Details
      </Text>
      <VStack flexWrap={"wrap"} width={"100%"} gap={"3"}>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Text>Sub Total</Text> <Text>1636.1</Text>{" "}
        </HStack>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Text>Delivery Charge</Text> <Text>0</Text>{" "}
        </HStack>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Text>Discount</Text> <Text>0</Text>{" "}
        </HStack>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Text>Liscious Wallet</Text> <Text>0</Text>{" "}
        </HStack>
      </VStack>
      <br />
      <Button alignContent={"center"} bg="#d11243" color={"white"}>
        Pay ₹370{" "}
      </Button>
    </Box>
  );
};

const CARD = () => {
  return (
    <Box padding={"8px"}>
      <Text
        w="100%"
        fontSize={"2xl"}
        textAlign={"start"}
        fontWeight="normal"
        mb="2%"
      >
        Pay Credit /Debit Card
      </Text>
      <FormControl mr="5%">
        <FormLabel htmlFor="cardNo" fontWeight={"normal"}>
          Card No.
        </FormLabel>
        <Input
          id="cardNo"
          type={"number"}
          maxLength={"16"}
          placeholder="Card No."
        />
      </FormControl>
      <Flex>
        <FormControl>
          <FormLabel htmlFor="mm" fontWeight={"normal"}>
            month
          </FormLabel>
          <Input
            width={"80%"}
            id="mm"
            type={"number"}
            maxLength={2}
            placeholder="MM"
          />
        </FormControl>
        /
        <FormControl>
          <FormLabel htmlFor="yyyy" fontWeight={"normal"}>
            year
          </FormLabel>
          <Input
            width={"80%"}
            id="yyyy"
            type={"number"}
            maxLength={4}
            placeholder="YYYY"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="CVV" fontWeight={"normal"}>
            CVV
          </FormLabel>
          <Input
            width={"80%"}
            type={"password"}
            maxLength={4}
            id="CVV"
            placeholder="CVV"
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="nameOnCard" fontWeight={"normal"}>
          Name on Card
        </FormLabel>
        <Input id="nameOnCard" type="text" placeholder="Enter Name" />
      </FormControl>
      <br />
      <Button alignContent={"center"} bg="#d11243" color={"white"}>
        Pay ₹370{" "}
      </Button>
    </Box>
  );
};
const NET = () => {
  return (
    <Box padding={"8px"}>
      <Text
        w="100%"
        fontSize={"2xl"}
        textAlign={"start"}
        fontWeight="normal"
        mb="2%"
      >
        Popular Banks
      </Text>
      <RadioGroup>
        <VStack justifyContent={"start"} alignItems={"start"}>
          <Radio colorScheme="red" value="1">
            State Bank Of India
          </Radio>
          <Radio colorScheme="green" value="2">
            Koatk Bank
          </Radio>
          <Radio colorScheme="red" value="3">
            HDFC India
          </Radio>
          <Radio colorScheme="green" value="4">
            ICICI Bank
          </Radio>
          <Radio colorScheme="red" value="5">
            AXIS Bank
          </Radio>
          <Radio colorScheme="green" value="6">
            Baroda Bank of India
          </Radio>
        </VStack>
      </RadioGroup>
      <br />
      <Button alignContent={"center"} bg="#d11243" color={"white"}>
        Pay ₹370{" "}
      </Button>
    </Box>
  );
};
export default function Checkout() {
  const [sliderValue, setSliderValue] = React.useState(0);
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  console.log(show);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.ProfileReducer.cart);
  console.log(cart);

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  const handleSubmit = () => {
    console.log(cart);
    console.log(localStorage.getItem("token"));
    axios
      .post("http://localhost:8080/profile/createmyorderprod", {
        data: cart,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Flex
        width={"80%"}
        flexWrap={"wrap"}
        margin="auto"
        mt={"10px"}
        justifyContent={"space-around"}
        alignItems="center"
      >
        <Box
          height={"450px" || "fit-content"}
          borderWidth="1px"
          rounded="lg"
          boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          width={"50%"}
          position={"relative"}
          p={6}
          as="form"
        >
          {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
          <ButtonGroup mt="5%" w="100%">
            <Flex
              w="90%"
              justifyContent="space-between"
              position={"absolute"}
              bottom={"5"}
            >
              <Flex>
                <Button
                  onClick={() => {
                    setStep(step - 1);
                    setSliderValue(sliderValue - 50);
                  }}
                  isDisabled={step === 1}
                  bg="#d11243"
                  color={"white"}
                  variant="solid"
                  w="7rem"
                  mr="5%"
                >
                  Back
                </Button>
                <Button
                  w="7rem"
                  bg="#d11243"
                  color={"white"}
                  isDisabled={step === 3}
                  onClick={() => {
                    setStep(step + 1);
                    if (step === 3) {
                      // setProgress(100);
                      setSliderValue(sliderValue + 50);
                    } else {
                      setSliderValue(sliderValue + 50);
                    }
                  }}
                  variant="outline"
                >
                  Next
                </Button>
              </Flex>
              {step === 3 ? (
                <Button
                  w="7rem"
                  bg="#d11243"
                  color={"white"}
                  variant="solid"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>

        <Box
          border={"1px solid red"}
          padding="10px"
          position={"relative"}
          width={"40%"}
        >
          <Slider
            border={"1px solid red"}
            paddingY={"110px"}
            width="85%"
            position={"absolute"}
            right="0"
            id="slider"
            size={"lg"}
            defaultValue={0}
            min={0}
            max={100}
            // isDisabled
            value={sliderValue}
            transform={"rotate(180deg)"}
            // direction={"ltr"}
            orientation={"vertical"}
            colorScheme="green"
          >
            <SliderMark
              transform={"rotate(180deg)"}
              value={-5}
              ml="5"
              mb="-1.5"
              fontSize="sm"
            >
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Choose Address{" "}
              </Text>
              This is Delivery address
            </SliderMark>
            <SliderMark
              transform={"rotate(180deg)"}
              value={47}
              ml="-1"
              mb="-2.5"
              fontSize="sm"
            >
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Delivery Summary{" "}
              </Text>
              1 item in 1 shipments
            </SliderMark>
            <SliderMark
              transform={"rotate(180deg)"}
              value={95}
              ml="2"
              mb="-1.5"
              fontSize="sm"
            >
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Payment Method{" "}
              </Text>
            </SliderMark>
            <SliderTrack
              transform={"rotate(180deg)"}
              dir="rtl"
              position={"absolute"}
              bottom={"0px"}
            >
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb>
              <Box
                color="green.800"
                transform={"rotate(180deg)"}
                size={"24px"}
                as={MdCheckCircle}
              />
            </SliderThumb>
          </Slider>
        </Box>
        <Stats />
      </Flex>
    </>
  );
}
