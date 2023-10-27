const UserRepository = require('../repositories/users/UserRepository');
const WorkoutRepository = require('../repositories/workout/WorkoutRepository');
const UserWorkoutRepository = require('../repositories/userWorkout/UserWorkoutRepository');

const userRep =  new UserRepository()
const workRep = new WorkoutRepository()
const userWorkRep = new UserWorkoutRepository()

module.exports = {
    user: {
        getusers: async (req, res) =>{
            try {
                const users = await userRep.getUser()
                res.status(200).json(users);
                // console.log(JSON.stringify(users))
                // res.render('tableUsers',{
                //     users
                // })
                // res.status(200).json(result);
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
        getusersId: async (req, res) =>{
            try {
                const {id} = req.params
                let result = await userRep.getUserId(id)
                res.status(200).json(result);
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
        createUsers: async (req, res) =>{
            try {
                const { name, age, injuries, comorbidities}  = req.body
                if (!name || name.trim().length === 0 ) {
                    throw new Error('Please provide a name')
                }
                if (!age ) {
                    throw new Error('Please provide a age')
                }
                let result = await userRep.createUser(req.body)

                if (!result.ok) {
                    throw new Error('Error')
                }
                res.status(200).send(result);
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
        putUsers: async (req, res) =>{
            try {
               const {id} = req.body
                await userRep.putUser(req.body)
                res.status(200).send('Atualizado com sucesso');
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
        deleteUsers: async (req, res) =>{
            try {
                const {id} = req.query
                await userRep.deleteUser(id)
                res.status(200).send();
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
        getTrainnings: async (req, res) =>{
            try {
                const {id} = req.query
                res.status(200).send(await userWorkRep.getUserWorkouts(id));
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }


        },
    },
    workout: {
        getWorkout: async (req, res) =>{
            try {
                let result = await workRep.getWorkouts()
               
                res.status(200).json(result.res);
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
        getWorkoutId: async (req, res) =>{
            try {
                const {id} = req.params
                let result = await workRep.getWorkoutId(id)
                res.status(200).json(result.res);
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
        createWorkout: async (req, res) =>{
            try {
                const { name, suitableAges, notSuitableInjuries, notSuitableComorbidities}  = req.body
                if (!name || name.trim().length === 0 ) {
                    throw new Error('Please provide a name')
                }
                let model = {
                    name,
                    suitableAges : suitableAges ? suitableAges : [],
                    notSuitableInjuries: notSuitableInjuries ? notSuitableInjuries : [],
                    notSuitableComorbidities: notSuitableComorbidities ? notSuitableComorbidities : [],
                }
                let result = await workRep.createWorkouts(model)
                if (!result.ok) {
                    throw new Error('Error')
                }
                res.status(200).send(result.res);
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
        
        putWorkout: async (req, res) =>{
            try {
                const {id} = req.body
                let result = await  workRep.putWorkout(req.body)
                res.status(200).json(result);
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
        deleteWorkout: async (req, res) =>{
            try {
                const {id} = req.query
                let result = await workRep.deleteWorkouts(id)
                res.status(200).json(result);
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
    },
    recommendation:{
        postRecommendation: async (req, res) =>{
            try {
                const {id} = req.body
                if (!id) {
                    throw new Error('Please provide a id')
                }

                let result = await userWorkRep.createRecommendation(id)
                if (!result.ok) {
                    throw new Error('Error')
                }
                res.status(200).send(result);
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        }
    },
    view:{
        get: async (req, res) =>{
            try {
                res.render('index');
            } catch (err) {
                res.status(400).json({ ok: false, message: `${err}  - Falha ao consultar ` })
            }
        },
    }
}