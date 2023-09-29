 async function recommendWorkouts(user, workouts) {
    const suitableWorkouts = workouts.filter((workout) => {
      const age = user.age;
      const injuries = user.injuries;
      const comorbidities = user.comorbidities;
  
      if (
        age >= workout.suitableAges[0] &&
        age <= workout.suitableAges[1] &&
        injuries.every((injury) => !workout.notSuitableInjuries.includes(injury)) &&
        comorbidities.every(
          (comorbidity) => !workout.notSuitableComorbidities.includes(comorbidity)
        )
      ) {
        return true;
      }
  
      return false;
    });
    
    return suitableWorkouts.map((workout) => workout.name);
  }

module.exports = { recommendWorkouts }


