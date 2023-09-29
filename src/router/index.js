module.exports = app =>{
    app.route('/user')
                .get(require('../controllers/hubController').user.getusers)
                .post(require('../controllers/hubController').user.createUsers)
                .put(require('../controllers/hubController').user.putUsers)
                .delete(require('../controllers/hubController').user.deleteUsers)
    app.route('/user/:id')
                .get(require('../controllers/hubController').user.getusersId)
                
    app.route('/workout')
        .get(require('../controllers/hubController').workout.getWorkout)
        .post(require('../controllers/hubController').workout.createWorkout)
        .put(require('../controllers/hubController').workout.putWorkout)
        .delete(require('../controllers/hubController').workout.deleteWorkout)

    app.route('/workout/:id')
        .get(require('../controllers/hubController').workout.getWorkoutId)
      


    app.route('/recommendation')
        .post(require('../controllers/hubController').recommendation.postRecommendation)
}       