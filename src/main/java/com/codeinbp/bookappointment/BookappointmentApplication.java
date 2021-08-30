package com.codeinbp.bookappointment;


import com.codeinbp.bookappointment.utils.generateRandomAccessCode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@Component
public class BookappointmentApplication {

    private static final Logger logger = LoggerFactory.getLogger(BookappointmentApplication.class);

    public static void main(String[] args) {

        SpringApplication.run(BookappointmentApplication.class, args);
        logger.info("INFO: Spring application is running on port 8083");

        String result = generateRandomAccessCode.generateAccessCode("1990-05-08", "mohammed");

        logger.info("ACCESS CODE: " + result);

    }

}
