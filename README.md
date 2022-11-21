# Lab 8 - Starter

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
- Manually run them locally before pushing code 
- So that we can prevnet crashing other codes.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
- No. We should use Unit Testing to test function return output.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- Yes I will. Because sending real messages might be time consuming and annoying. There are unit test for functions such as sending emails so I believe there exists similar functions for testing sending messages.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- Yes. I think obtaining the message length and compare with 80 is simple and can be achieved with unit testing.

