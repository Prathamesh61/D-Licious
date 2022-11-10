let toastAlert = (toast, msg, status) => {
    toast({
        title: msg,
        position: "top-right",
        isClosable: true,
        status: status,
        duration: 5000,
    });
};


export  {toastAlert}