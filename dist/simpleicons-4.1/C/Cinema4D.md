# Cinema4 D

```text
simpleicons-4.1/C/Cinema4D
```

```text
include('simpleicons-4.1/C/Cinema4D')
```

|icon|element|
|---|---|
|![](Cinema4D.png)|![](Cinema4D.element.png)|



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
' loads the Cinema4D element
include('simpleicons-4.1/C/Cinema4D')
Cinema4D('cinema_4_d', 'Cinema4 D', 'an optional tech field')
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
' loads the Cinema4D element
include('simpleicons-4.1/C/Cinema4D')
Cinema4D('cinema_4_d', 'Cinema4 D', 'an optional tech field')
@enduml
```

