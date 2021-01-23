# Giphy

```text
simpleicons-4/G/Giphy
```

```text
include('simpleicons-4/G/Giphy')
```

|icon|element|
|---|---|
|![](Giphy.png)|![](Giphy.element.png)|



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
' loads the Giphy element
include('simpleicons-4/G/Giphy')
Giphy('giphy', 'Giphy', 'an optional tech field')
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
' loads the Giphy element
include('simpleicons-4/G/Giphy')
Giphy('giphy', 'Giphy', 'an optional tech field')
@enduml
```
