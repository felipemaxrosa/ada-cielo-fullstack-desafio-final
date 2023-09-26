package com.api.prospect.utils;

public class StringUtils {
  public static String formatToSpecificDigits(String input, int totalDigits) {
    if (input.length() == totalDigits) {
      return input;
    }

    int missingZeros = totalDigits - input.length();

    String formattedString;
    formattedString = "0".repeat(Math.max(0, missingZeros)) +
            input;

    return formattedString;

  }
}
