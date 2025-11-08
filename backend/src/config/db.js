const mongoose = require('mongoose')

const configDB = () => {
            try {
                        mongoose.connect(process.env.MONGO_URI)
                                    .then(() => console.log('COnnected to DB!'))
                                    .catch((err) => console.error(`Error connecting to DB: ${err}`));
            }
            catch (err) {
                        console.error(`unexpected eror: ${err}!`)
            }
}

module.exports = configDB;