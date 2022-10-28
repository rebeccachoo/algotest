import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Leg = ({ data, index, changeListItem }) => {
  const [futureOrOption, setFutureOrOption] = useState("");
  const [lot, setLot] = useState(1);
  const [position, setPosition] = useState("");

  const [newData, setNewData] = useState(null);

  useEffect(() => {
    setFutureOrOption(data.Segments);
    setLot(parseInt(data.Lots));
    setPosition(data.PositionType);
    setNewData(data);
  }, []);

  useEffect(() => {
    changeListItem(newData, index);
  }, [newData]);

  console.log("newData", newData);

  const futures = (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box className="title">
          Lots:{" "}
          <input
            type="number"
            min="1"
            max="5000"
            className="select"
            value={newData?.Lots}
            onChange={(e) => setNewData({ ...newData, Lots: e.target.value })}
          />
        </Box>
        <Box sx={{ pl: 2 }}>
          <select
            className="select select_selected"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
        </Box>
      </Box>
      <Box sx={{ px: 10, pt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ pr: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <input
                type="checkbox"
                id="Momentum"
                name="Momentum"
                value="Momentum"
              />
              <Box sx={{ px: 1 }}>
                <label htmlFor="Momentum">Simple Momentum</label>
              </Box>
              <Tooltip title="After the entry condition for trade is met, the leg will track the price to move a certain amount (either in absolute points, or percentage) before taking trade. When delayed momentum types are selected, the value represents the number of minutes to wait for defining the range.">
                <HelpOutlineIcon
                  sx={{
                    color: "gray",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            </Box>
            <Box sx={{ pt: 1 }}>
              <select
                className="select"
                value={newData?.LegMomentum.Type}
                onChange={(e) =>
                  setNewData({
                    ...newData,
                    LegMomentum: {
                      ...newData.LegMomentum,
                      Type: e.target.value,
                    },
                  })
                }
              >
                <option value="None">None</option>
                <option value="MomentumType.PointsUp">Points &uarr;</option>
                <option value="MomentumType.PointsDown">Points &darr;</option>
                <option value="MomentumType.PercentageUp">
                  Percentage &uarr;
                </option>
                <option value="MomentumType.PercentageDown">
                  Percentage &darr;
                </option>
                <option value="MomentumType.UnderlyingPointsUp">
                  Underlying Points &uarr;
                </option>
                <option value="MomentumType.UnderlyingPointsDown">
                  Underlying Points &darr;
                </option>
                <option value="MomentumType.UnderlyingPercentageUp">
                  Underlying Percentage &uarr;
                </option>
                <option value="MomentumType.UnderlyingPercentageDown">
                  Underlying Percentage &darr;
                </option>
              </select>
              <input
                type="number"
                min="1"
                max="5000"
                className="select"
                value={newData?.LegMomentum.Value}
                onChange={(e) =>
                  setNewData({
                    ...newData,
                    LegMomentum: {
                      ...newData.LegMomentum,
                      Value: e.target.value,
                    },
                  })
                }
              />
            </Box>
          </Box>
          <Box sx={{ pr: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <input type="checkbox" id="Target" name="Target" value="Target" />
              <Box sx={{ px: 1 }}>
                <label htmlFor="Target">Target Profit</label>
              </Box>
            </Box>
            <Box sx={{ pt: 1 }}>
              <select
                className="select"
                onChange={(e) =>
                  setNewData({
                    ...newData,
                    LegTarget: {
                      ...newData.LegTarget,
                      Type: e.target.value,
                    },
                  })
                }
              >
                <option value="LegTarget.Points">Points</option>
                <option value="LegTarget.UnderlyingPoints">
                  Underlying Points
                </option>
                <option value="LegTarget.Percentage">Percentage</option>
                <option value="LegTarget.UnderlyingPercentage">
                  Underlying Percentage
                </option>
              </select>
              <input
                type="number"
                min="1"
                max="5000"
                className="select"
                value={0}
              />
            </Box>
          </Box>
          <Box sx={{ pr: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <input type="checkbox" id="Stop" name="Stop" value="Stop" />
              <Box sx={{ px: 1 }}>
                <label htmlFor="Stop">Stop Loss</label>
              </Box>
            </Box>
            <Box sx={{ pt: 1 }}>
              <select
                className="select"
                onChange={(e) =>
                  setNewData({
                    ...newData,
                    LegStopLoss: {
                      ...newData.LegStopLoss,
                      Type: e.target.value,
                    },
                  })
                }
              >
                <option value="LegTgtSLType.Points">Points</option>
                <option value="LegTgtSLType.UnderlyingPoints">
                  Underlying Points
                </option>
                <option value="LegTgtSLType.Percentage">Percentage</option>
                <option value="LegTgtSLType.UnderlyingPercentage">
                  Underlying Percentage
                </option>
              </select>
              <input
                type="number"
                min="1"
                max="5000"
                className="select"
                value={newData?.LegStopLoss.Value}
                onChange={(e) =>
                  setNewData({
                    ...newData,
                    LegStopLoss: {
                      ...newData.LegStopLoss,
                      Value: e.target.value,
                    },
                  })
                }
              />
            </Box>
          </Box>
          <Box sx={{ pr: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <input type="checkbox" id="Trail" name="Trail" value="Trail" />
              <Box sx={{ px: 1 }}>
                <label htmlFor="Trail">Trail SL</label>
              </Box>
              <Tooltip title="With trailing SL, you can move your actual stop loss, whenever the price moves in your favor. So every time the instrument moves in your favor by X amount, we will move the stop loss Y amount in the same direction. Amount can be in terms of points or percentage.">
                <HelpOutlineIcon
                  sx={{
                    color: "gray",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            </Box>
            <Box sx={{ pt: 1 }}>
              <select
                className="select"
                onChange={(e) =>
                  setNewData({
                    ...newData,
                    LegTrailSL: {
                      ...newData.LegTrailSL,
                      Type: e.target.value,
                    },
                  })
                }
              >
                <option value="None">None</option>
                <option value="TrailStopLossType.Points">Points</option>
                <option value="TrailStopLossType.Percentage">Percentage</option>
              </select>
              <input
                type="number"
                min="1"
                max="5000"
                className="select"
                value={newData?.LegTrailSL.Value.InstrumentMove}
                onChange={(e) =>
                  setNewData({
                    ...newData,
                    LegTrailSL: {
                      ...newData.LegTrailSL,
                      Value: {
                        ...newData.LegTrailSL.Value,
                        InstrumentMove: e.target.value,
                      },
                    },
                  })
                }
              />
              <input
                type="number"
                min="1"
                max="5000"
                className="select"
                value={newData?.LegTrailSL.Value.StopLossMove}
                onChange={(e) =>
                  setNewData({
                    ...newData,
                    LegTrailSL: {
                      ...newData.LegTrailSL,
                      Value: {
                        ...newData.LegTrailSL.Value,
                        StopLossMove: e.target.value,
                      },
                    },
                  })
                }
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 4,
          }}
        >
          <Box sx={{ pr: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <input
                type="checkbox"
                id="Momentum"
                name="Momentum"
                value="Momentum"
              />
              <Box sx={{ px: 1 }}>
                <label htmlFor="Momentum">Re-entry on Tgt</label>
              </Box>
            </Box>
            <Box sx={{ pt: 1 }}>
              <select className="select">
                <option value="Buy">RE ASAF </option>
                <option value="Buy">RE ASAF &#x21A9;</option>
                <option value="Buy">RE MOMENTUM </option>
                <option value="Buy">RE MOMENTUM &#x21A9;</option>
                <option value="Buy">RE COST </option>
                <option value="Buy">RE COST &#x21A9;</option>
              </select>
              <input
                type="number"
                min="1"
                max="5000"
                className="select"
                value={1}
              />
            </Box>
          </Box>
          <Box sx={{ pr: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <input type="checkbox" id="Target" name="Target" value="Target" />
              <Box sx={{ px: 1 }}>
                <label htmlFor="Target">Re-entry on SL</label>
              </Box>
              <Tooltip
                title="RE ASAP (Immediate Reentry)
Reenter immediately with whatever price available. For example, if we’ve chosen ATM strike and SL is hit, we will immediately re-enter same position with new ATM strike
RE ASAP ↩ (Immediate Reverse Reentry)
Reenter Immediately with whatever price available and reverse the position. For example, if we entered a short ATM call with SL 40% at Rs 100 (so SL = 140), and SL is hit, then we will re-enter with new ATM call, but this time we will take a long position, SL will remain the same at 40%
RE COST (At Cost Reentry)
Reenter the original leg at previous entry price. For example, if we sell an ATM call, entry price was Rs 100, SL is 20%, so SL price is Rs 120. Now if SL is hit, we will choose the same ATM call strike to enter and wait for its price to come back to Rs 100 before we re-enter the same option. SL will remain 20% upon re-entry
RE COST ↩ (At Cost Reverse Reentry)
Reenter the original leg at previous entry price and reverse the position. For example, if we sell a call, entry price was Rs 100, SL is 20%, so SL price is Rs 120. Now if SL is hit, we will choose the same ATM call strike to enter and wait for its price to come back to Rs 100 before we re-enter the same option, but this time we will take a reverse position, i.e. buy the option. SL will remain 20% upon re-entry
RE MOMENTUM (Reentry with Momentum)
If we have selected “Simple Momentum”, then we will wait for the momentum condition to hold true before we re-enter
Eg “Simple Momentum” is set to Up 10%, we are long on an ATM call with entry time = 9:30am. If the price of the call at 9:30am is 100, then we will buy the option when its price reaches 110. Now once our SL is hit, we will choose the new ATM call and say its price was Rs 50 when the SL was hit. So now, we will wait for the price to go up to Rs 55 before we enter again
If “Simple Momentum” is not selected, then this behaves exactly like RE ASAP
RE MOMENTUM ↩ (Reverse Reentry with Momentum)
If we have selected “Simple Momentum”, then we will wait for the momentum condition to hold true before we re-enter, but we will re-enter the reverse position this time
Eg “Simple Momentum” is set to Up 10%, we are long on an ATM call with entry time = 9:30am. If the price of the call at 9:30am is 100, then we will buy the option when its price reaches 110. Now once our SL is hit, we will choose the new ATM call and say its price was Rs 50 when the SL was hit. So now, we will wait for the price to go up to Rs 55 before we enter again, but this time we will sell the call
If “Simple Momentum” is not selected, then this behaves exactly like RE ASAP ↩"
              >
                <HelpOutlineIcon
                  sx={{
                    color: "gray",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            </Box>
            <Box sx={{ pt: 1 }}>
              <select className="select">
                <option value="Buy">RE ASAF </option>
                <option value="Buy">RE ASAF &#x21A9;</option>
                <option value="Buy">RE MOMENTUM </option>
                <option value="Buy">RE MOMENTUM &#x21A9;</option>
                <option value="Buy">RE COST </option>
                <option value="Buy">RE COST &#x21A9;</option>
              </select>
              <input
                type="number"
                min="1"
                max="5000"
                className="select"
                value={1}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
  const options = (
    <Box>
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box className="title">
            Lots:{" "}
            <input
              type="number"
              min="1"
              max="5000"
              className="select"
              value={lot}
              onChange={(e) => setLot(e.target.value)}
            />
          </Box>
          <Box sx={{ pl: 2 }}>
            <select
              className="select select_selected"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </select>
          </Box>
        </Box>
        <Box sx={{ px: 10, pt: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ pr: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="checkbox"
                  id="Momentum"
                  name="Momentum"
                  value="Momentum"
                />
                <Box sx={{ px: 1 }}>
                  <label htmlFor="Momentum">Simple Momentum</label>
                </Box>{" "}
                <Tooltip title="After the entry condition for trade is met, the leg will track the price to move a certain amount (either in absolute points, or percentage) before taking trade. When delayed momentum types are selected, the value represents the number of minutes to wait for defining the range.">
                  <HelpOutlineIcon
                    sx={{
                      color: "gray",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </Box>
            </Box>
            <Box sx={{ pr: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="checkbox"
                  id="Target"
                  name="Target"
                  value="Target"
                />
                <Box sx={{ px: 1 }}>
                  <label htmlFor="Target">Target Profit</label>
                </Box>
              </Box>
            </Box>
            <Box sx={{ pr: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <input type="checkbox" id="Stop" name="Stop" value="Stop" />
                <Box sx={{ px: 1 }}>
                  <label htmlFor="Stop">Stop Loss</label>
                </Box>
              </Box>
            </Box>
            <Box sx={{ pr: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <input type="checkbox" id="Trail" name="Trail" value="Trail" />
                <Box sx={{ px: 1 }}>
                  <label htmlFor="Trail">Trail SL</label>
                </Box>
                <Tooltip title="With trailing SL, you can move your actual stop loss, whenever the price moves in your favor. So every time the instrument moves in your favor by X amount, we will move the stop loss Y amount in the same direction. Amount can be in terms of points or percentage.">
                  <HelpOutlineIcon
                    sx={{
                      color: "gray",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 2,
            }}
          >
            <Box sx={{ pr: 6 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="checkbox"
                  id="Momentum"
                  name="Momentum"
                  value="Momentum"
                />
                <Box sx={{ px: 1 }}>
                  <label htmlFor="Momentum">Simple Momentum</label>
                </Box>{" "}
                <Tooltip title="After the entry condition for trade is met, the leg will track the price to move a certain amount (either in absolute points, or percentage) before taking trade. When delayed momentum types are selected, the value represents the number of minutes to wait for defining the range.">
                  <HelpOutlineIcon
                    sx={{
                      color: "gray",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </Box>
            </Box>
            <Box sx={{ pr: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="checkbox"
                  id="Target"
                  name="Target"
                  value="Target"
                />
                <Box sx={{ px: 1 }}>
                  <label htmlFor="Target">Target Profit</label>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    </Box>
  );
  return futureOrOption === "Futures" ? futures : options;
};

export default Leg;
