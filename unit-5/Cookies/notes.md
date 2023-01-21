# Cookies
- Data
    - Set by the web server
    - Stored by the client
    - Sent back to the server on **every** request.

## Uses
- Tracking over a time span (through browser)
- Storing data w/o allocating server space
- Early version of **localStorage** for storing objects on client side.

## Limitations
- Not secure
- Not very large
    - Client can restrict further
- Users can erase them at any time.
    - browser setting can erase them after sessions.

## Local Storage Vs Cookies

| Cookies | Local Storage |
| --- | --- |
| server-side reference | client-side reference |
| in headers request | server can't access |
| required when servers need access to data | stores user settings (light/dark modes) |
| Max size: 4096 bytes | Max size: 5MB |
| expires | no expiration |