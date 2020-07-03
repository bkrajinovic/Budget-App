import React from "react"
import {
  Page,
  Text,
  View,
  StyleSheet,
  Document,
  Image,
} from "@react-pdf/renderer"
import axios from "axios"

// Create styles
const styles = StyleSheet.create({
  // tu stiliziras izgled tablice i canvasa
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  img:{
    height: "100px"
  }
})

// Create Document Component
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
          {/* <View style={styles.section}>
                    <Text>Section #1</Text>
                </View> */}
          <Image src={this.state.src} />
        </Page>
      </Document>
    )
  }
}

export default Pdf
