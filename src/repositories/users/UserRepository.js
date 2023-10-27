const {userSequelize} = require('../../models/User');
const {workoutSequelize} = require('../../models/Workout');
const {userWorkoutSequelize} = require('../../models/UserWorkout');
const {recommendWorkouts}  = require('../../usecases/recommendation')
class UserRepository {
    constructor(){
       
    }

    async getUser(){
        return await userSequelize.findAll({
            include:[
                {
                  model:userWorkoutSequelize,
                  attributes:['id','workout'],
                  as: 'workouts'

                }
            ]
        });
    }
    async getUserId(id){
        return await userSequelize.findAll({where:{id:id}});
    }
    async createUser(model){
        let listWorks = [];

        let user =  await userSequelize.create(model);
        let workouts = await workoutSequelize.findAll()
        if (workouts.length === 0 ) {
            return {ok:false}
        }
        let resultWorkout  =  await recommendWorkouts(user, workouts)
        
        for (let i = 0; i < resultWorkout.length; i++) {
            const element = resultWorkout[i];
            listWorks.push({name: element,});
        }
        let modelWorkout = {
            workout:listWorks,
            userId: user.id
        }
        let res = await userWorkoutSequelize.create(modelWorkout);
        return {
            ok:true,
            result: res
        }
    }
    async putUser(model){
         let res = await userSequelize.update(model,{where:{id:model.id}});
         return {
            ok:true,
            res:'Atualizado com sucesso'
        }
    }
    async deleteUser(id){
         await userSequelize.destroy({where:{id:id}});
         return  {
            ok:true,
            res:'Deletado com sucesso'
        }
    }
}

module.exports = UserRepository;