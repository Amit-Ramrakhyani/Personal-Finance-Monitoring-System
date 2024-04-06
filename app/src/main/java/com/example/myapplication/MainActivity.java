package com.example.myapplication;

import android.Manifest;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.telephony.SmsMessage;
import android.widget.Toast;
import androidx.activity.ComponentActivity;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import android.os.StrictMode;



import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

class MessageSender {
    public void sendMessage(String message, String sender, String sentStamp, String receivedStamp, String sim) {
        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();

        StrictMode.setThreadPolicy(policy);
        try {
            // Create URL for the API endpoint
            URL url = new URL("http://35.154.233.250:5000/main/sms");

            // Create HttpURLConnection object
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            // Set request method to POST
            conn.setRequestMethod("POST");

            // Set content type
            conn.setRequestProperty("Content-Type", "application/json");

            // Enable output and set content length
            conn.setDoOutput(true);
            byte[] postData = ("{\"test\": \"" + message + "\", \"from\": \"" + sender + "\", \"sentStamp\" : "+sentStamp+"  , \"receivedStamp\": \""+receivedStamp+"\", \"sim\" : \""+sim+"\"}").getBytes(StandardCharsets.UTF_8);
            conn.setRequestProperty("Content-Length", String.valueOf(postData.length));

            // Write data to the connection's output stream
            try (OutputStream os = conn.getOutputStream()) {
                os.write(postData);
            }

            // Check if the request was successful (HTTP status code 200)
            if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
                // Request successful, handle response if needed
                System.out.println("Message sent successfully!");
            } else {
                // Request failed, handle error
                System.out.println("Failed to send message. Response code: " + conn.getResponseCode());
            }

            // Disconnect the connection
            conn.disconnect();
        } catch (IOException e) {
            // Exception occurred, handle error
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        MessageSender sender = new MessageSender();
        sender.sendMessage("Hello, finFlow!", "TeamDeltaIV");
    }
}


public class MainActivity extends AppCompatActivity {

    private SmsReceiver smsReceiver;
    private class SmsReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            // Retrieves a map of extended data from the intent.
            final Bundle bundle = intent.getExtras();

            try {
                if (bundle != null) {
                    final Object[] pdusObj = (Object[]) bundle.get("pdus");
                    if (pdusObj != null) {
                        for (Object pduObj : pdusObj) {
                            SmsMessage currentMessage = SmsMessage.createFromPdu((byte[]) pduObj);
                            String senderNum = currentMessage.getDisplayOriginatingAddress();
                            String message = currentMessage.getDisplayMessageBody();

                            // Here you can process the incoming SMS, for example, display a Toast message
//

                            // Send the SMS message to the server
                            
                            String sentStamp = String.valueOf(currentMessage.getTimestampMillis());
                            String sim = currentMessage.getSubscriptionId();
                            String receivedStamp = String.valueOf(System.currentTimeMillis());
                            MessageSender sender = new MessageSender();
                            sender.sendMessage(message, senderNum, sentStamp, receivedStamp, sim);

                            // make asynctask to send message to server

                            Toast.makeText(context, "Sender: " + senderNum + ", Message: " + message, Toast.LENGTH_LONG).show();


                        }
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        // Register BroadcastReceiver to receive SMS messages
        smsReceiver = new SmsReceiver();
        IntentFilter filter = new IntentFilter("android.provider.Telephony.SMS_RECEIVED");
        registerReceiver(smsReceiver, filter);



        // Request RECEIVE_SMS permission if not granted
        requestReceiveSmsPermission();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        // Unregister BroadcastReceiver when activity is destroyed
        if (smsReceiver != null) {
            unregisterReceiver(smsReceiver);
        }
    }

    // Inner class for handling SMS received


    // Method to request RECEIVE_SMS permission if not granted
    private void requestReceiveSmsPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.RECEIVE_SMS) != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.RECEIVE_SMS}, 1);
            }
        }
    }

    // Handle the result of the permission request
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == 1) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // Permission granted
                Toast.makeText(this, "RECEIVE_SMS permission granted", Toast.LENGTH_SHORT).show();
            } else {
                // Permission denied
                Toast.makeText(this, "RECEIVE_SMS permission denied", Toast.LENGTH_SHORT).show();
            }
        }
    }
}
