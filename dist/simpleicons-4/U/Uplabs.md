# Uplabs

```text
simpleicons-4/U/Uplabs
```

```text
include('simpleicons-4/U/Uplabs')
```

|icon|element|
|---|---|
|![](Uplabs.png)|![](Uplabs.element.png)|



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
' loads the Uplabs element
include('simpleicons-4/U/Uplabs')
Uplabs('uplabs', 'Uplabs', 'an optional tech field')
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
' loads the Uplabs element
include('simpleicons-4/U/Uplabs')
Uplabs('uplabs', 'Uplabs', 'an optional tech field')
@enduml
```

