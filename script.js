  function getRandomColor() {
                let letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            for (let i = 0; i < 800; i++) {
                let square = document.createElement('div');
                square.classList.add('square');
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = getRandomColor();
                    setTimeout(() => {
                        square.style.backgroundColor = '';
                    }, 1000);
                });
                document.querySelector('.container').appendChild(square);
            }