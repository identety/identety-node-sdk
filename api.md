# App

Methods:

- <code title="get /">client.app.<a href="./src/resources/app.ts">retrieve</a>() -> void</code>

# Clients

Types:

- <code><a href="./src/resources/clients.ts">Client</a></code>
- <code><a href="./src/resources/clients.ts">ClientListResponse</a></code>

Methods:

- <code title="post /clients">client.clients.<a href="./src/resources/clients.ts">create</a>({ ...params }) -> Client</code>
- <code title="get /clients/{id}">client.clients.<a href="./src/resources/clients.ts">retrieve</a>(id) -> Client</code>
- <code title="patch /clients/{id}">client.clients.<a href="./src/resources/clients.ts">update</a>(id, { ...params }) -> Client</code>
- <code title="get /clients">client.clients.<a href="./src/resources/clients.ts">list</a>({ ...params }) -> ClientListResponse</code>
- <code title="delete /clients/{id}">client.clients.<a href="./src/resources/clients.ts">delete</a>(id) -> Client</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> User</code>
- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> User</code>
- <code title="put /users/{id}">client.users.<a href="./src/resources/users.ts">update</a>(id, { ...params }) -> User</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /users/{id}">client.users.<a href="./src/resources/users.ts">delete</a>(id) -> User</code>

# Orgs

Methods:

- <code title="get /org/{id}">client.orgs.<a href="./src/resources/orgs.ts">retrieve</a>(id) -> void</code>

# Roles

Methods:

- <code title="get /role/{id}">client.roles.<a href="./src/resources/roles.ts">retrieve</a>(id) -> void</code>
