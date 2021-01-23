# W3 C

```text
simpleicons-4/W/W3C
```

```text
include('simpleicons-4/W/W3C')
```

|icon|element|
|---|---|
|![](W3C.png)|![](W3C.element.png)|



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
' loads the W3C element
include('simpleicons-4/W/W3C')
W3C('w_3_c', 'W3 C', 'an optional tech field')
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
' loads the W3C element
include('simpleicons-4/W/W3C')
W3C('w_3_c', 'W3 C', 'an optional tech field')
@enduml
```

