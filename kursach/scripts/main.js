currMainPicture = 0;
            amountOfPictures = 4;
            const premierePictures = [];

            premierePictures.push(document.getElementById("MIB"));
            premierePictures.push(document.getElementById("rushHour"));
            premierePictures.push(document.getElementById("Fargo"));
            premierePictures.push(document.getElementById("sixtySeconds"));

            function mainPictureToTheRight()
            {

                if(currMainPicture == amountOfPictures - 1)
                {
                    return;
                }

                premierePictures[currMainPicture].style.transform = 'translateX('  + (-100 * (currMainPicture + 1)) + '%)';
                premierePictures[currMainPicture + 1].style.transform = 'translateX('  + (-100 * (currMainPicture + 1)) + '%)';

                currMainPicture++;
            }

            function mainPictureToTheLeft()
            {
                if(currMainPicture == 0)
                {
                    return;
                }
                premierePictures[currMainPicture - 1].style.transform = 'translateX('  + (-100 * (currMainPicture - 1)) + '%)';
                premierePictures[currMainPicture].style.transform = 'translateX('  + (-100 * (currMainPicture - 1)) + '%)';
                currMainPicture--;
            }

            let touchStartX = 0;
            let touchEndX = 0;
            const slider = document.querySelector('.mainPremierePictures');

            function handleTouchStart(e) {
                touchStartX = e.changedTouches[0].screenX;
            }

            function handleTouchEnd(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }

            function handleSwipe() {
                const swipeThreshold = 50;
                
                if (touchEndX < touchStartX - swipeThreshold) {            
                    mainPictureToTheRight();
                } else if (touchEndX > touchStartX + swipeThreshold) {
                    mainPictureToTheLeft();
                }
            }

            slider.addEventListener('touchstart', handleTouchStart, false);
            slider.addEventListener('touchend', handleTouchEnd, false);

            document.getElementById('toTheRight').addEventListener('click', mainPictureToTheRight);
            document.getElementById('toTheLeft').addEventListener('click', mainPictureToTheLeft);