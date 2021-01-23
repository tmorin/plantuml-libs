# Myspace

```text
simpleicons-4/M/Myspace
```

```text
include('simpleicons-4/M/Myspace')
```

|icon|element|
|---|---|
|![](Myspace.png)|![](Myspace.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Myspace element
include('simpleicons-4/M/Myspace')
Myspace('myspace', 'Myspace', 'an optional tech field')
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
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Myspace element
include('simpleicons-4/M/Myspace')
Myspace('myspace', 'Myspace', 'an optional tech field')
@enduml
```

