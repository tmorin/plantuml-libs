# G2 A

```text
simpleicons-4.1/G/G2A
```

```text
include('simpleicons-4.1/G/G2A')
```

|icon|element|
|---|---|
|![](G2A.png)|![](G2A.element.png)|



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
' loads the G2A element
include('simpleicons-4.1/G/G2A')
G2A('g_2_a', 'G2 A', 'an optional tech field')
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
' loads the G2A element
include('simpleicons-4.1/G/G2A')
G2A('g_2_a', 'G2 A', 'an optional tech field')
@enduml
```

