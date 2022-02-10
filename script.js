const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select medea stream , pass to video element , than play
async function selectMediaStream() {
  try {
    const mediaStram = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStram;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  // Disable button
  button.disable = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //   Reset Button
  button.disable = false;
});

// On load
selectMediaStream();
