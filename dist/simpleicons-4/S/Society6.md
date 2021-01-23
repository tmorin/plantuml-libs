# Society6

```text
simpleicons-4/S/Society6
```

```text
include('simpleicons-4/S/Society6')
```

|icon|element|
|---|---|
|![](Society6.png)|![](Society6.element.png)|



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
' loads the Society6 element
include('simpleicons-4/S/Society6')
Society6('society_6', 'Society6', 'an optional tech field')
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
' loads the Society6 element
include('simpleicons-4/S/Society6')
Society6('society_6', 'Society6', 'an optional tech field')
@enduml
```

