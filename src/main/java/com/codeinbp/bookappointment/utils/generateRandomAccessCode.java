package com.codeinbp.bookappointment.utils;

import java.util.UUID;

public class generateRandomAccessCode {

    public static String generateAccessCode(String dateOfBirth, String name) {
        UUID uuid = UUID.randomUUID();
        String uuidAsString = uuid.toString();
        String randomNumber = String.valueOf((int) Math.floor(Math.random() * 100 + 1));
        String result = uuidAsString.substring(0,8)+ name.substring(0,2) + dateOfBirth.substring(0,2);

        return (result+randomNumber).substring(0, 6).toUpperCase();
    }
}
