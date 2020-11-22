package com.hackwestern.ws;

import org.springframework.data.repository.CrudRepository;

public interface WorkoutRepository extends CrudRepository<Workout, Integer> {

    Iterable<Workout> findAllByEquipmentName(String equipmentName);
}
