import React from "react"
import { Page, StyleSheet, Document, Image } from "@react-pdf/renderer"
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  img: {
    height: "100px",
  },
  graph: {
    marginTop: "40%",
    height: "35%",
    width: "100%",
  },
})

class Pdf extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: "",
    }
  }

  componentDidMount() {
    fetch("http://localhost:3004/png")
      .then((response) => response.json())
      .then((data) => this.setState({ src: data.src }))
  }

  render() {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Image src={this.state.src} style={styles.graph} />
        </Page>
      </Document>
    )
  }
}

export default Pdf
