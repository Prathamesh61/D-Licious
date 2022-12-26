

  
  // for carousel start
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // for carousel end

  
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

   {/* <Slider {...settings}>
                {datamap.map((item) => (

                  <div className="card" key={item._id}>
                    <div className="card-top">
                    <Link to={`/productdetails/${item._id}`} >
                      <img
                        src={
                          defaultImage[item.name] === item.name
                            ? defaultImage.linkDefault
                            : item.imgUrl
                        }
                        alt={item.name}
                        onError={handleErrorImage}
                      />
                      </Link>
                      <Text className="Card-titleName">{item.name}</Text>
                    </div>
                    <Box fontSize='md' className="Card-middle">{item.desc}</Box>
                    <div className="card-bottom">
                      <Flex style={{ marginTop: "4%" }}>
                        <h3 >Pieces:&nbsp;{item.qty}&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.net} </h3>

                      </Flex>

                      <Flex style={{
                        justifyContent: "space-between", alignItems: "center",
                        marginTop: "3%"
                      }}>
                        <Box><Text fontSize='2xl' style={{ color: "#D11243" }}>
                          MRP: ₹{item.price}</Text></Box>
                        <Box>
                          <Button color="white" bg={"#D11243"} paddingX={"8px"}
                          _hover={{color:"#D11243",backgroundColor:"silver"}}
                          onClick={() => addToCart(item, item.name)}>
                            ADD TO CART
                          </Button>
                        
                        </Box>
                      </Flex>

                      <Flex style={{ textAlign: "center", alignItems: "center", margin: "auto", marginTop: "3%" }}>
                        <Image width="30px" src="https://www.licious.in/img/rebranding/express_delivery.svg" />
                        <Text fontSize="md" color='gray'>&nbsp;&nbsp;Today in &nbsp;</Text>
                        <Text fontSize="md" style={{ color: "gray", fontWeight: "600" }}> 90 min</Text>

                      </Flex>
                    </div>
                  </div>
                ))}
              </Slider> */}
