DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

run the following command to start database locally
make sure docker is up and running
```
docker volume create ignitedb
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -v ignitedb:/var/lib/postgresql/data postgres
```

--sample json to send and check
```
{
  "teamName": "Tech Titans",
  "totalMembers": 3,
  "leaderName": "John Doe",
  "leaderEmail": "johndoe@example.com",
  "leaderContact": "9876543210",
  "university": "XYZ University",
  "members": [
    {
      "name": "Alice Smith"
    },
    {
      "name": "Bob Johnson"
    }
  ],
  "referral": "Code123"
}
```

run the following command to check the db in web
```
npx prisma studio
```

