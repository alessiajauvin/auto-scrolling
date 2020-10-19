export default {
  mainContainer: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
  },
  fixedContainer: {
    padding: "20px",
    backgroundColor: "#0B5AB0",
    color: "white",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  fixedContainerContent1: {
    height: "100px",
    width: "100px",
    backgroundColor: "aliceblue",
  },
  fixedContainerContent2: {
    height: "100px",
    width: "100px",
    backgroundColor: "yellow",
  },
  contentContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  contentWrapper1: {
    display: "flex",
    flex: "33%",
    minHeight: "0px",
    flexDirection: "column",
  },
  contentWrapper2: {
    display: "flex",
    flex: "67%",
    minHeight: "0px",
    flexDirection: "column",
  },
  overflowContainer: {
    flex: 1,
    overflow: "auto",
  },
  overflowContent: {
    height: "100px",
    color: "black",
    backgroundColor: "cornflowerblue",
    padding: "20px",
    margin: "10px",
  },
  overflowContent_active: {
    backgroundColor: "yellow",
  },
};
