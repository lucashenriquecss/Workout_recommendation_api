const {WorkoutModel,workoutSequelize} = require('../../models/Workout');

class WorkoutRepository {
    constructor(){}

    async createWorkouts(model){
        let res = await workoutSequelize.create(model);
        return {
            ok:true,
            res
        }
    }
    async getWorkouts(){
        let res = await workoutSequelize.findAll();
        return {
            ok:true,
            res
        }
    }
    async getWorkoutId(id){
        let res = await workoutSequelize.findAll({where:{id:id}});
        return {
            ok:true,
            res
        }
    }
    async putWorkout(model){
        let res = await workoutSequelize.update(model, {where:{id:model.id}});
        return {
            ok:true,
            res: 'Atualizado com sucesso'
        }
    }
    async deleteWorkouts(id){
        let res = await workoutSequelize.destroy({where:{id:id}});
        return {
            ok:true,
            res: 'Deletado com sucesso'
        }
    }
}

module.exports = WorkoutRepository;