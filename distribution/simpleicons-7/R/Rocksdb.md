# Rocksdb


```text
simpleicons-7/R/Rocksdb
```

```text
include('simpleicons-7/R/Rocksdb')
```



| Illustration | Rocksdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rocksdb.png) | ![illustration for Rocksdb](../../simpleicons-7/R/Rocksdb.Local.png) |




## Rocksdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rocksdb
include('simpleicons-7/R/Rocksdb')

' renders the element
Rocksdb('Rocksdb', 'Rocksdb', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rocksdb
include('simpleicons-7/R/Rocksdb')

' renders the element
Rocksdb('Rocksdb', 'Rocksdb', 'an optional tech label')
@enduml
```

