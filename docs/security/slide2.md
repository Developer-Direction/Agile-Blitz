### Security Best Practices

- Secure Coding: Discuss the importance of writing code that is secure from the start.

- Regular Code Reviews: Stress on peer reviews for spotting potential security issues.

```python
### Vulnerable Code
import sqlite3
 
 # Function to get user details
 def get_user_details(username):
     # Connect to SQLite database
     conn = sqlite3.connect('example.db')
     cursor = conn.cursor()
 
     # Vulnerable SQL query
     query = "SELECT * FROM users WHERE username = '" + username + "';"
     cursor.execute(query)
 
     # Fetch and return user details
     user_details = cursor.fetchall()
     conn.close()
     return user_details
 
 # Example usage
 username = input("Enter username: ")
 user_details = get_user_details(username)
 print(user_details)
```

```python
# Secure function to get user details
 def get_user_details_secure(username):
     # Connect to SQLite database
     conn = sqlite3.connect('example.db')
     cursor = conn.cursor()
 
     # Secure SQL query using parameterized query
     query = "SELECT * FROM users WHERE username = ?;"
     cursor.execute(query, (username,))
 
     # Fetch and return user details
     user_details = cursor.fetchall()
     conn.close()
     return user_details
```