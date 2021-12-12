// Crea un sito che come pagina iniziale ha 2 pulsanti:
// start e stop. Quando premi start inizia il quiz, 
// quando premi stop termina l'esecuzione e ti da il punteggio.
// Il gioco ti propone 4 possibili risultati per una 
// operazione generata randomicamente 
// (sia i numeri che l'operazione di per sè tra le 4 principali).
//  se sbagli perdi e ti da il punteggio, se fai passare più di
//   10 secondi perdi, se azzecchi ne crea una nuova.

Vue.config.devtools = true;

const app = new Vue(
   {
       el: '#root',
       data: {
           maxNumberChoice: 3,
           randomNumbersChoice: 0,
           result: [],
           result2: 0,
           result3: 0,
           result4: 0,
           firstNumber: 0,
           secondNumber: 0,
           randomOperation: '',
           randomNumberOperation: 0,
           index: 0,
        },
       methods: {
            startGame: function() {
                console.log('funzione chiamata')
                this.result = []
                this.result.push(Math.floor(Math.random() * 100 + 1)),
                this.result.push(Math.floor(Math.random() * 100 + 1)),
                this.result.push(Math.floor(Math.random() * 100 + 1)),
                this.result.push(Math.floor(Math.random() * 100 + 1)),
                this.firstNumber = Math.floor(Math.random() * 30 + 1);
                this.secondNumber = Math.floor(Math.random() * 30 + 1);
                this.randomNumberOperation = Math.floor(Math.random() * 3);
                this.index = Math.floor(Math.random() * 3);

                switch (this.randomNumberOperation) {
                    case 0:
                        this.randomOperation = '+'
                        this.result[this.index] = this.firstNumber + this.secondNumber
                        break;
                    case 1:
                        this.randomOperation = '-'
                        this.result[this.index] = this.firstNumber - this.secondNumber
                        break;
                    case 2:
                        this.randomOperation = '/'
                        this.result[this.index] = this.firstNumber / this.secondNumber
                        break;
                    case 3:
                        this.randomOperation = '*'
                        this.result[this.index] = this.firstNumber * this.secondNumber
                        break;
                }
            },
            verify: function(ind) {
                if (ind === this.index) {
                    this.startGame();
                } else {
                    alert('Hai perso')
                }
            }
            
       }
   }
)