# Rocksdb


```text
simpleicons-8/R/Rocksdb
```

```text
include('simpleicons-8/R/Rocksdb')
```



| Illustration | Rocksdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Rocksdb.png) | ![illustration for Rocksdb](../../simpleicons-8/R/Rocksdb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RocksdbXs>`
- `<$RocksdbSm>`
- `<$RocksdbMd>`
- `<$RocksdbLg>`





## Rocksdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rocksdb
include('simpleicons-8/R/Rocksdb')

' renders the element
Rocksdb('Rocksdb', 'Rocksdb', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rocksdb
include('simpleicons-8/R/Rocksdb')

' renders the element
Rocksdb('Rocksdb', 'Rocksdb', 'an optional tech label', 'an optional description')
@enduml
```

