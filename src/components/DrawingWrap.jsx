return(<DrawingWrap >
    <CanvasDraw brushColor={"red"} imgSrc={"./img/background.jpg"} />
    <button
      onClick={() => {
        localStorage.setItem(
          "savedDrawing",
          this.saveableCanvas.getSaveData()
        );
      }}
    >save</button>
  </DrawingWrap>
)