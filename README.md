# Whiteboard with Delete and Undo Buttons

This is a simple HTML-based whiteboard application with delete and undo functionality. It allows users to draw on a canvas, delete the drawn objects, and undo the last drawn object. The canvas supports freehand drawing using a mouse.

## Demo
 


## Features

- Freehand drawing on a canvas.
- Delete button: Clear the canvas of all drawings.
- Undo button: Remove the last drawn object.

## Usage

1. Clone the repository or copy the HTML code to an HTML file.
2. Open the HTML file in a web browser.
3. Use the mouse to draw on the canvas.
4. Click the "Delete" button to clear the canvas.
5. Click the "Undo" button to remove the last drawn object.

## HTML Structure

The HTML file consists of the following components:

- Canvas element (`#whiteboard`): The drawing area.
- Delete button (`#deleteButton`): Clears the canvas.
- Undo button (`#undoButton`): Removes the last drawn object.

## JavaScript Logic

The JavaScript code handles the drawing functionality and the interaction with buttons. Key functions include:

- `startDrawing(e)`: Initiates drawing when the mouse is clicked.
- `draw(e)`: Continues drawing as the mouse moves.
- `stopDrawing()`: Finalizes the drawing process.
- `clearWhiteboard()`: Clears all drawings from the canvas.
- `handleUndo()`: Removes the last drawn object.
- `redrawCanvas()`: Redraws all objects on the canvas.

