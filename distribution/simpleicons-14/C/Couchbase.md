# Couchbase


```text
simpleicons-14/C/Couchbase
```

```text
include('simpleicons-14/C/Couchbase')
```



| Illustration | Couchbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Couchbase.png) | ![illustration for Couchbase](../../simpleicons-14/C/Couchbase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CouchbaseXs>`
- `<$CouchbaseSm>`
- `<$CouchbaseMd>`
- `<$CouchbaseLg>`





## Couchbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Couchbase
include('simpleicons-14/C/Couchbase')

' renders the element
Couchbase('Couchbase', 'Couchbase', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Couchbase
include('simpleicons-14/C/Couchbase')

' renders the element
Couchbase('Couchbase', 'Couchbase', 'an optional tech label', 'an optional description')
@enduml
```

