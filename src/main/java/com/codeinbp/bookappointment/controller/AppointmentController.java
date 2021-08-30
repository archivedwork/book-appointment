package com.codeinbp.bookappointment.controller;


import com.codeinbp.bookappointment.entity.Appointment;
import com.codeinbp.bookappointment.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")
public class AppointmentController {

    // inject appointment REpository
    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppointmentController(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }


    @PostMapping("/appointment")
    public Appointment saveAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }


    @GetMapping("/appointment/{id}")
    public Appointment getAppointmentId(@PathVariable("id") String appointmentId) {
        return appointmentRepository.getAppointmentById(appointmentId);
    }

    @DeleteMapping("/appointment/{id}")
    public String deleteAppointment(@PathVariable("id") String appointmentId) {
        return appointmentRepository.delete(appointmentId);
    }

    @PutMapping("/appointment/{id}")
    public String updateAppointment(@PathVariable("id") String appointmentId, @RequestBody Appointment appointment) {
        return appointmentRepository.update(appointmentId, appointment);

    }

    @GetMapping("/appointments")
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.getAllAppointments();
    }
}
