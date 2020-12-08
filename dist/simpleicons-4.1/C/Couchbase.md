# Couchbase

```text
simpleicons-4.1/C/Couchbase
```

```text
include('simpleicons-4.1/C/Couchbase')
```

|icon|element|
|---|---|
|![](Couchbase.png)|![](Couchbase.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Couchbase element
include('simpleicons-4.1/C/Couchbase')
Couchbase('couchbase', 'Couchbase', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Couchbase element
include('simpleicons-4.1/C/Couchbase')
Couchbase('couchbase', 'Couchbase', 'an optional tech field')
@enduml
```

