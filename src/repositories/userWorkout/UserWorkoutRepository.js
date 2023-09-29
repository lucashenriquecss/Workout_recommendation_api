const {userWorkoutSequelize} = require('../../models/UserWorkout');
const {userSequelize} = require('../../models/User');
const {recommendWorkouts}  = require('../../usecases/recommendation');
const {workoutSequelize} = require('../../models/Workout');
class UserWorkoutRepository {
    constructor(){}

    async createRecommendation(id){
        let listWorks = [];
        let resUser = await userSequelize.findAll({where: {id: id}});

        let workouts = await workoutSequelize.findAll();
        if (workouts.length === 0 ) {
            return {ok:false}
        }
        let resultWorkout  =  await recommendWorkouts(resUser[0], workouts)
        
        for (let i = 0; i < resultWorkout.length; i++) {
            const element = resultWorkout[i];
            listWorks.push({name: element,});
        }
        let modelWorkout = {
            workout:listWorks,
            userId: id
        }

        let res = await userWorkoutSequelize.create(modelWorkout);
   
        return result
    }
}

module.exports = UserWorkoutRepository;