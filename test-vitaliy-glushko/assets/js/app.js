"use strict";

document.addEventListener('DOMContentLoaded', () => {
    function initParalax() {
        const page = document.querySelector('.page');
        const title = document.querySelector('.title');
    
        const forCircle = 5;
        const speed = 0.05;
    
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;
    
        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
    
            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);
    
            title.style.cssText = `transform: translate(${positionX / forCircle}%, ${positionY / forCircle}%) translate(-50%, -50%)`;
    
            requestAnimationFrame(setMouseParallaxStyle);
        }
    
        setMouseParallaxStyle();
    
        page.addEventListener('mousemove', (e) => {
            const pageWidth = page.offsetWidth;
            const pageHeight = page.offsetHeight;
    
            const coordX = e.pageX - pageWidth / 2;
            const coordY = e.pageY - pageHeight / 2;
    
            coordXprocent = coordX / pageWidth * 100;
            coordYprocent = coordY / pageHeight * 300;
        });
    }
    
    initParalax();
    
    
    function initSpinner() {
        const wheel = document.querySelector('.circle__wheel');
    
        const speed = 0.25;
    
        let rotate = 0;
        let rotateProcent = 0;
    
        function setMouseScrollStyle() {
            rotate = rotate + (rotateProcent * speed)
    
            wheel.style.cssText = `transform: rotate(${rotate}deg)`;
        }
    
        document.addEventListener('wheel', (e) => {
            setMouseScrollStyle();
    
            rotateProcent = e.deltaY;
    
        });
    }
    
    initSpinner();

});