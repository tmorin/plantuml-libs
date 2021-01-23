# Mitsubishi

```text
simpleicons-4/M/Mitsubishi
```

```text
include('simpleicons-4/M/Mitsubishi')
```

|icon|element|
|---|---|
|![](Mitsubishi.png)|![](Mitsubishi.element.png)|



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
' loads the Mitsubishi element
include('simpleicons-4/M/Mitsubishi')
Mitsubishi('mitsubishi', 'Mitsubishi', 'an optional tech field')
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
' loads the Mitsubishi element
include('simpleicons-4/M/Mitsubishi')
Mitsubishi('mitsubishi', 'Mitsubishi', 'an optional tech field')
@enduml
```

