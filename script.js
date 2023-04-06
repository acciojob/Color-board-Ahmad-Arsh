
for (let i = 0; i < 800; i++) {
                let square = document.createElement('div');
                square.classList.add('square');
                square.addEventListener('mouseover', () => {
                    setTimeout(() => {
                        square.style.backgroundColor = '';
                    }, 1000);
                });
                document.querySelector('.container').appendChild(square);
            }
