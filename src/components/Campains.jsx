import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import images from "../apis/images";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Campains() {
  const [data, setData] = useState([]);

  const windowWidth = useWindowWidth()

  useEffect(() => {
    setTimeout(() => {
      setData(images);
    }, 2000);
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {


    if (activeStep === maxSteps -1){
      setActiveStep(0);
    }
    else{
    setActiveStep((x) => x + 1);
    }
  };

  const handleBack = () => {
    if(activeStep === 0){
      setActiveStep(maxSteps -1);
    }
    else{
    setActiveStep((x) => x - 1);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (

    
    <Container sx={{ maxWidth: 400, flexGrow: 1, marginTop: 5 }}>
      <Typography variant="h6">
        <bold>Kampanyalar</bold>
      </Typography>

      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.length == 0 ? (
          <div>Loading ... </div>
        ) : (
          data.map((step, index) => (
            <div key={index} className="d-flex justify-content-center">
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    backgroundColor: "#F2F2F2",
                    // height: 255,
                    display: "block",

                    overflow: "hidden",
                    width: "70%",
                    borderRadius: 5,
                  }}
                  src={step.image}
                  // alt={step.label}
                />
              ) : null}
            </div>
          ))
        )}
      </AutoPlaySwipeableViews>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
        
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Container>
  );
}

export default Campains;
