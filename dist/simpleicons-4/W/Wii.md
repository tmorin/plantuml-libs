# Wii

```text
simpleicons-4/W/Wii
```

```text
include('simpleicons-4/W/Wii')
```

|icon|element|
|---|---|
|![](Wii.png)|![](Wii.element.png)|



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
' loads the Wii element
include('simpleicons-4/W/Wii')
Wii('wii', 'Wii', 'an optional tech field')
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
' loads the Wii element
include('simpleicons-4/W/Wii')
Wii('wii', 'Wii', 'an optional tech field')
@enduml
```
