import "./App.css";
import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material/";

import Futures from "./Components/Futures";
import Options from "./Components/Options";
import Leg from "./Components/Futures/Leg";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { HashLink } from "react-router-hash-link";

function App() {
  const [lot, setLot] = useState("1");
  const [position, setPosition] = useState("Buy");

  const [futureOrOption, setFutureOrOption] = useState("Futures");
  const [list, setList] = useState([]);

  const [show, setShow] = useState(false);
  const [jsonFile, setJsonfile] = useState(null);

  const removeLeg = (index) => {
    console.log("index", index);
    setList((oldArray) => oldArray.filter((item, i) => i !== index));
    setShow(false);
  };

  const copyLeg = (item) => {
    setList([...list, item]);
  };
  console.log(list);

  const changeListItem = (data, index) => {
    setList((list) =>
      list.map((obj, ind) => {
        if (ind === index) {
          return data;
        }
        return obj;
      })
    );
  };

  useEffect(() => {
    setShow(false);

    console.log("Legs", list);
    let jsonString = JSON.stringify(list);
    setJsonfile(jsonString);
  }, [list]);

  return (
    <div className="App">
      <h1>Algotest</h1>
      <Box>
        by{" "}
        <a href="mailto:rnwldms@gmail.com" target={"_blank"}>
          Rebecca Choo
        </a>
      </Box>

      <Box
        sx={{
          pt: 10,
          pb: 2,
          width: "100%",
          textAlign: "left",
          fontWeight: "bold",

          mb: 7,
        }}
      >
        <Box sx={{ mx: 10, pb: 2, borderBottom: "1px solid #E0E0E0" }}>
          Legs
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          // border: "1px solid black",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box className="title" sx={{ pr: 2 }}>
            Select Segments
          </Box>
          <Box>
            <button
              className="button1"
              onClick={() => setFutureOrOption("Futures")}
              style={{
                backgroundColor: futureOrOption === "Futures" ? "#375a9e " : "",
                color: futureOrOption === "Futures" ? "white " : "black",
              }}
            >
              Futures
            </button>
            <button
              style={{
                backgroundColor: futureOrOption === "Options" ? "#375a9e " : "",
                color: futureOrOption === "Options" ? "white " : "black",
              }}
              className="button2"
              onClick={() => setFutureOrOption("Options")}
            >
              Options
            </button>
          </Box>
        </Box>
        {futureOrOption === "Futures" ? (
          <Futures
            setLot={setLot}
            setPosition={setPosition}
            lot={lot}
            position={position}
          />
        ) : (
          <Options
            setLot={setLot}
            setPosition={setPosition}
            lot={lot}
            position={position}
          />
        )}
      </Box>
      <Box sx={{ pt: 4 }}>
        <button
          onClick={() =>
            setList((old) => [
              ...old,
              {
                Segments: futureOrOption,
                PositionType:
                  position === "Buy" ? "PositionType.Buy" : "PositionType.Sell",
                Lots: lot,

                LegStopLoss: { Type: "Points", Value: 0 },
                LegTarget: { Type: "", Value: "" },
                LegTrailSL: {
                  Type: "None",
                  Value: { InstrumentMove: 0, StopLossMove: 0 },
                },
                LegMomentum: { Type: "None", Value: 0 },
                ExpiryKind: "ExpiryType.Weekly",
              },
            ])
          }
          className="confirm_btn"
        >
          Add Leg
        </button>
        <button className="cancel_btn">Cancel</button>
      </Box>
      <Box>
        {list.map((li, index) => {
          return (
            <Box
              key={index}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{ my: 2, backgroundColor: "#efefef", p: 4, width: "90%" }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{ position: "absolute", top: "-20px", right: "-10px" }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <HighlightOffIcon
                        onClick={() => removeLeg(index)}
                        sx={{ color: "red", cursor: "pointer" }}
                      />
                      <FileCopyIcon
                        onClick={() => copyLeg(li)}
                        sx={{ color: "gray", pt: "2px", cursor: "pointer" }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Leg data={li} index={index} changeListItem={changeListItem} />
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ py: 3, pt: 10 }}>
        {/* <HashLink to="fetch"> */}
        <Button
          variant="contained"
          color="success"
          onClick={() => setShow(true)}
        >
          FETCH
        </Button>
        {/* </HashLink> */}
      </Box>
      <Box
        sx={{
          pb: 30,
          borderTop: "1px solid lightgray",
          mt: 4,
          lineHeight: "1.9em",
        }}
      >
        {/* <section id="fetch"></section> */}
        {list &&
          show &&
          list.map((li, i) => {
            return (
              <>
                <Box sx={{ pb: 3, pt: 3 }} key={i}>
                  <h1>Leg #{i + 1}</h1>
                  <Box>
                    <span className="title">Segments</span>: {li.Segments}
                  </Box>
                  <Box>
                    <span className="title">Lots</span>: {li.Lots}
                  </Box>
                  <Box>
                    <Box>
                      <span className="title">LegStopLoss Type</span>:{" "}
                      {li.LegStopLoss.Type}
                    </Box>
                    <Box>
                      <span className="title">LegStopLoss Value</span>:{" "}
                      {li.LegStopLoss.Value}
                    </Box>
                    <Box>
                      <span className="title">LegTrailSL</span>:{" "}
                      {li.LegTrailSL.Type}
                    </Box>
                    <Box>
                      <span className="title">
                        LegTrailSL.Value.InstrumentMove
                      </span>
                      : {li.LegTrailSL.Value.InstrumentMove}
                    </Box>
                    <Box>
                      <span className="title">
                        LegTrailSL.Value.StopLossMove
                      </span>
                      : {li.LegTrailSL.Value.StopLossMove}
                    </Box>
                    <Box>
                      <span className="title">LegMomentum.Type</span>:{" "}
                      {li.LegMomentum.Type}
                    </Box>
                    <Box>
                      <span className="title">LegMomentum.Value</span>:{" "}
                      {li.LegMomentum.Value}
                    </Box>
                  </Box>
                </Box>
              </>
            );
          })}
        {list.length === 0 && (
          <Box sx={{ pt: 3 }}>Please add one leg to show.</Box>
        )}

        {list && show && (
          <Box sx={{ pt: 3 }}>
            Here is JSON file...
            <Box sx={{}}>
              <code>{jsonFile}</code>
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default App;
