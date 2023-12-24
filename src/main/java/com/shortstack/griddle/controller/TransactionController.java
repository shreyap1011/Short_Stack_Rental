package com.shortstack.griddle.controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;
import com.shortstack.griddle.model.IncomingRequest;
import com.shortstack.griddle.service.TransactionService;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TransactionController {
    private final String key = "r9ZDzvjtd0tk3cUyXnyIAPAq6Q4llUGo";
    private final String secret = "DZZMUzm0FOBPF6Tzycs7CczcBtF7YwgHhMlKNJJI7Rp";
    private final String paymentUrl = "https://cert.api.fiservapps.com/ch/payments/v1/charges";
    @Autowired
    TransactionService transactionService;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/makePayment")
    public String makePayment(@RequestParam int tenantid,@RequestBody(required = true) Map<String, Object> incomingRequest) throws URISyntaxException {
        long requestId = (long) (Math.random() * 10000000) + 1;
        long timestamp = System.currentTimeMillis();
        Gson gson = new Gson();
        String jsonString = incomingRequest.toString();
        IncomingRequest payload = gson.fromJson(jsonString, IncomingRequest.class);
        String jsonRequest = gson.toJson(payload);
        String rawSignature = key + requestId + timestamp + jsonRequest;
        String computedHmac = computeHmac(rawSignature, secret);
        HttpRequest postRequest = HttpRequest.newBuilder()
                .uri(new URI("https://cert.api.fiservapps.com/ch/payments/v1/charges"))
                .header("Content-Type", "application/json")
                .header("Client-Request-Id", String.valueOf(requestId))
                .header("Api-Key", "r9ZDzvjtd0tk3cUyXnyIAPAq6Q4llUGo")
                .header("Timestamp", String.valueOf(timestamp))
                .header("Auth-Token-Type", "HMAC")
                .header("Authorization", String.valueOf(computedHmac))
                .POST(HttpRequest.BodyPublishers.ofString(jsonRequest))
                .build();
        HttpResponse<String> postResponse;
        try{
            HttpClient httpClient = HttpClient.newHttpClient();
            postResponse = httpClient.send(postRequest, HttpResponse.BodyHandlers.ofString());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
//        TimeUnit.SECONDS.sleep(2);
        var test1 = postResponse.body();
        JsonObject responseObject = JsonParser.parseString(postResponse.body()).getAsJsonObject();

        // Extract properties from the JSON object
        String transactionType = responseObject
                .getAsJsonObject("gatewayResponse")
                .get("transactionType")
                .getAsString();

        String orderId = responseObject
                .getAsJsonObject("gatewayResponse")
                .getAsJsonObject("transactionProcessingDetails")
                .get("orderId")
                .getAsString();

        double total = responseObject
                .getAsJsonObject("paymentReceipt")
                .getAsJsonObject("approvedAmount")
                .get("total")
                .getAsDouble();

        String status = responseObject
                .getAsJsonObject("paymentReceipt")
                .getAsJsonObject("processorResponseDetails")
                .get("approvalStatus")
                .getAsString();

        String transactionTimestamp = responseObject
                .getAsJsonObject("gatewayResponse")
                .getAsJsonObject("transactionProcessingDetails")
                .get("transactionTimestamp")
                .getAsString();

        String sourceType = responseObject
                .getAsJsonObject("source")
                .get("sourceType")
                .getAsString();

        String cardType = responseObject
                .getAsJsonObject("source")
                .getAsJsonObject("card")
                .get("scheme")
                .getAsString();

        String transactionId = responseObject
                .getAsJsonObject("gatewayResponse")
                .getAsJsonObject("transactionProcessingDetails")
                .get("transactionId")
                .getAsString();

        String last4 = responseObject
                .getAsJsonObject("source")
                .getAsJsonObject("card")
                .get("last4")
                .getAsString();


        transactionService.createTransaction(tenantid, transactionId, transactionType, transactionTimestamp, orderId, total, status, sourceType, cardType, last4);
        if (status.equals("APPROVED")) {
            transactionService.createPayment(tenantid, total, transactionTimestamp.substring(0, 9), sourceType, cardType + " " + last4);
            return "payment sucesss";
        } else {
            return "payment denied";
        }
    }

    private static String computeHmac(String message, String key) {
        try {
            Mac sha256Hmac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKey = new SecretKeySpec(key.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            sha256Hmac.init(secretKey);
            byte[] hmacData = sha256Hmac.doFinal(message.getBytes(StandardCharsets.UTF_8));
            return Base64.getEncoder().encodeToString(hmacData);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}

