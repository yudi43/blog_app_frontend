import React from "react";
import ImageUploader from "react-images-upload";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picture: null, uploaded: false };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      picture: picture,
      uploaded: true,
    });
    this.props.setImg(picture);
  }

  render() {
    let uploadedmark;
    if (this.state.uploaded) {
      uploadedmark = (
        <p style={{ marginLeft: "180px", color: "green" }}>Image Selected.</p>
      );
    }
    return (
      <div>
        <ImageUploader
          withIcon={false}
          buttonText="Choose an image"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        {uploadedmark}
      </div>
    );
  }
}

export default ImageUpload;
