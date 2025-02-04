Download my-app2
Run from the respository using bun start

curl -X POST http://localhost:3000/api/calls

will return

{"messages":[{"sent":"Mon Feb 03 2025","from":"AI","to":"User","content":"You said you require assistance with XYZ. I am unable to provide this assistance at this time. Routing to live agent to provide further support."},{"sent":"Mon Feb 03 2025","from":"AI","to":"User","content":"You said you require assistance with XYZ. I am unable to provide this assistance at this time. Routing to live agent to provide further support."}]}

curl -X GET http://localhost:3000/api/calls?type=<insert type here>

will return the type passed in the query param