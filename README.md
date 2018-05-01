# parch-connector-sql

## Installation

`yarn add parch-connector-sql`

## Usage

```typescript
import { SQLConnector } from 'parch-connector-sql';

const connector = new SQLConnector(models);

connector.models
connector.model('user');

await connector.createRecord('user', {
  email: 'foo@bar.com',
  password: 'password'
});

await connector.destroyRecord('user', 1);

await connector.findAll('user');

await connector.findOne('user', 1);

await connector.queryRecord('user', { email: { $like: 'foo' }});

await connector.updateRecord('user', 1, {
  firstName: 'foo'
});
```
