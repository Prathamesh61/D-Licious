import { Button } from "@chakra-ui/react";
import { useState } from "react";

export const ADDTOCARTBUTTON = () => {
    const [check, setcheck] = useState(0);
    return (
      <>
        {(check < 1 && (
          <Button
            onClick={() => setcheck(1)}
            style={{
              backgroundColor: "#D11243",
              color: "white",
              fontSize: "13px",
              fontWeight: "600",
              height: "30px",
              width: "100px",
            }}
          >
            ADD TO CART
          </Button>
        )) ||
          (check >= 1 && (
            <Box>
              <Button
                style={{
                  backgroundColor: "white",
                  fontSize: "30px",
                  color: "#D11243",
                }}
                onClick={() => setcheck(check - 1)}
              >
                -
              </Button>
              <Button style={{ backgroundColor: "white", fontSize: "20px" }}>
                {check}
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  fontSize: "30px",
                  color: "#D11243",
                }}
                onClick={() => setcheck(check + 1)}
              >
                +
              </Button>
            </Box>
          ))}
      </>
    );
  };