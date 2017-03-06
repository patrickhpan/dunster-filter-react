import React from 'react';
import getPFP from '../js/getPFP'
import overlaySrc from '../img/dunster.png'

const CANVAS_SIZE = 1024;

class Editor extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        getPFP().then(url => {
            console.log(url)
            this.loadImage(url)
        });
    }
    loadImage(url) {
        let img = new Image();
        img.onload = () => {
        
            let dims = {
                width: img.width,
                height: img.height
            }
            this.drawOnCanvas(img, dims);
        }
        img.src = url;
    }
    drawOnCanvas(img, dims) {
        console.log(dims);
        let c = this.canvas;
        let ctx = c.getContext('2d');
        
        let { width, height } = dims;

        let smallest = Math.min(width, height);
        let dx = 0;
        let dy = 0;
        let dWidth = CANVAS_SIZE;
        let dHeight = CANVAS_SIZE;
        let sx = (width - smallest) / 2;
        let sy = (height - smallest) / 2;
        let sWidth = smallest;
        let sHeight = smallest;

        console.log(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

        ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        this.drawOverlay(ctx);
    }
    drawOverlay(ctx) {
        let overlay = new Image()
        overlay.onload = () => {
            ctx.drawImage(overlay, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
        }
        overlay.src = overlaySrc;
    }

    render() {
        let registerCanvas = canvas => { this.canvas = canvas };

        return <canvas
                width={CANVAS_SIZE}
                height={CANVAS_SIZE}
                ref={registerCanvas}
            />
    }    
}

export default Editor;