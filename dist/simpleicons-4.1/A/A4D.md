# A4 D

```text
simpleicons-4.1/A/A4D
```

```text
include('simpleicons-4.1/A/A4D')
```

|icon|element|
|---|---|
|![](A4D.png)|![](A4D.element.png)|



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
' loads the A4D element
include('simpleicons-4.1/A/A4D')
A4D('a_4_d', 'A4 D', 'an optional tech field')
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
' loads the A4D element
include('simpleicons-4.1/A/A4D')
A4D('a_4_d', 'A4 D', 'an optional tech field')
@enduml
```

