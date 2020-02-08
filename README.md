# moleculer-service-template

## Description
I created this template to have a basic project with all the configurations I would like my projects to have.

## Template features

* Nat Transporter
* Prettier
* Lint
* vscode launch & editor settings

Optional:
* database (Mongo)

## Create project

```bash
$ moleculer init juanmcristobal/moleculer-service-template hello-world
```

## Quick test
```bash
$ docker run -d -p 4222:4222  nats
$ npm run dev
mol$ services
```


docker run -d -p 27017:27017 mongo

mol $ call db-identity.create --title "my-title" --content "my-content" 
{ options: { title: 'my-title', content: 'my-content' },
  actionName: 'db-identity.create',
  rawCommand: 'call db-identity.create --title "my-title" --content "my-content"' }
>> Call 'db-identity.create' with params: { title: 'my-title', content: 'my-content' }
>> Execution time:
>> Response:
{ votes: 0,
  _id: '5e3e81da8b324763260fc5ff',
  title: 'my-title',
  content: 'my-content',
  __v: 0 }

  mol $ call db-identity.list 
{ options: {},
  actionName: 'db-identity.list',
  rawCommand: 'call db-identity.list' }
>> Call 'db-identity.list' with params: {}
>> Execution time:
>> Response:
{ rows: 
   [ { votes: 0,
       _id: '5e3e81da8b324763260fc5ff',
       title: 'my-title',
       content: 'my-content',
       __v: 0 } ],
  total: 1,
  page: 1,
  pageSize: 10,
  totalPages: 1 }