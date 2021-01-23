# Greensock

```text
simpleicons-4/G/Greensock
```

```text
include('simpleicons-4/G/Greensock')
```

|icon|element|
|---|---|
|![](Greensock.png)|![](Greensock.element.png)|



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
' loads the Greensock element
include('simpleicons-4/G/Greensock')
Greensock('greensock', 'Greensock', 'an optional tech field')
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
' loads the Greensock element
include('simpleicons-4/G/Greensock')
Greensock('greensock', 'Greensock', 'an optional tech field')
@enduml
```

