
# QuizCoder-Backend

Back-end per l'applicazione web QuizCoder. Implementa API REST per l'iscrizione utente.

## 🚀 Tecnologie usate

- Node.js
- Express.js
- SQLite (tramite Sequelize ORM)
- CORS
- Body-parser

## 📂 Struttura del progetto

- **server.js**: File principale del server, definisce le rotte API.
- **models/**: Definizione dei modelli di dati con Sequelize.
- **package.json**: Gestione delle dipendenze e script.

## 🛢️ Database

- SQLite utilizzato tramite Sequelize per una gestione facile e ordinata dei dati.

## 📥 Installazione

Clona la repository:
```bash
git clone https://github.com/Abnaoub/QuizCoder-Backend.git
```

Installa le dipendenze:
```bash
cd QuizCoder-Backend
npm install
```

Avvia il server:
```bash
node server.js
```

## 📌 API principali

- **`/subscribe`**: Endpoint per la sottoscrizione degli utenti.

## 🔗 Collegamento con Front-End

Il Front-End (`QuizCoder`) consuma le API REST fornite da questo Back-End.

Quando l'utente prova di andare a vedere gli ultimi quiz svolti, il Front-End controlla il local storage per vedere se l'iscrizione è avvenuta. Se l'iscrizione non è avvenuta, l'utente viene reindirizzato alla pagina di iscrizione `subscribe.html`. Quando l'utente poi si iscrive, solo se la chiamata va  a buon fine viene aggiunto nel local storage "subscribed: true" e quindi si può accedere alla pagina "last-quiz.html" e vedere i risultati dei quiz.

## 📋 Requisiti

- Node.js (versione consigliata: LTS)
- npm (incluso con Node.js)
