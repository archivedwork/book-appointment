package com.codeinbp.bookappointment.repository;


import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import com.codeinbp.bookappointment.entity.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
public class AppointmentRepository {

    // DI - inject dynamoDB

    private final DynamoDBMapper dynamoDBMapper;

    @Autowired
    public AppointmentRepository(DynamoDBMapper dynamoDBMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }

    public Appointment save(Appointment appointment) {
        dynamoDBMapper.save(appointment);
        return appointment;
    }


    public Appointment getAppointmentById(String appointmentId) {
        return dynamoDBMapper.load(Appointment.class,  appointmentId);
    }

    public String delete(String appointmentId) {
        Appointment app = dynamoDBMapper.load(Appointment.class, appointmentId);
        dynamoDBMapper.delete(app);
        return "Appointment Deleted Successfully!";
    }


    public String update(String appointmentId, Appointment appointment) {
        dynamoDBMapper.save(appointment,
                new DynamoDBSaveExpression()
                        .withExpectedEntry("appointmentId",
                                new ExpectedAttributeValue(
                                        new AttributeValue().withS(appointmentId)
                                )));
        return appointmentId;
    }


    public List<Appointment>  getAllAppointments() {
        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
        return dynamoDBMapper.scan(Appointment.class, scanExpression);
    }
}
