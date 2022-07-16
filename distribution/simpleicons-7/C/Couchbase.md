# Couchbase


```text
simpleicons-7/C/Couchbase
```

```text
include('simpleicons-7/C/Couchbase')
```



| Illustration | Couchbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Couchbase.png) | ![illustration for Couchbase](../../simpleicons-7/C/Couchbase.Local.png) |




## Couchbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Couchbase
include('simpleicons-7/C/Couchbase')

' renders the element
Couchbase('Couchbase', 'Couchbase', 'an optional tech label')
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

' loads the Item which embeds the element Couchbase
include('simpleicons-7/C/Couchbase')

' renders the element
Couchbase('Couchbase', 'Couchbase', 'an optional tech label')
@enduml
```

