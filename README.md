# NuDB

> NuDB is a fast database and search Engine

## Installation
First install node.js and nudb. Then:

``` sh
$ npm install nudb
```

## Overview

### Connecting to NuDB
``` js
var nudb = require('nudb');
nudb.connect('localhost', 'my_database');
```

### Search record
``` js
nudb.search('query_word');
```

### Get record by id
``` js
nudb.rget('rec_id');
```

### Insert JSON record
``` js
nudb.rputJSON('data');
```

### Insert record by file
``` js
# JSON record
nudb.fputJSON('json_file_path');
# GAIS record
nudb.fputRec('text_file_path', 'recbeg');
```

### Delete record by id
``` js
nudb.rdel('rec_id');
```

### To do
- [ ] Error handling
- [ ] Other useful features
