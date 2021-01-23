# A3 M

```text
simpleicons-4/A/A3M
```

```text
include('simpleicons-4/A/A3M')
```

|icon|element|
|---|---|
|![](A3M.png)|![](A3M.element.png)|



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
' loads the A3M element
include('simpleicons-4/A/A3M')
A3M('a_3_m', 'A3 M', 'an optional tech field')
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
' loads the A3M element
include('simpleicons-4/A/A3M')
A3M('a_3_m', 'A3 M', 'an optional tech field')
@enduml
```

