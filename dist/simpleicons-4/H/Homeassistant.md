# Homeassistant

```text
simpleicons-4/H/Homeassistant
```

```text
include('simpleicons-4/H/Homeassistant')
```

|icon|element|
|---|---|
|![](Homeassistant.png)|![](Homeassistant.element.png)|



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
' loads the Homeassistant element
include('simpleicons-4/H/Homeassistant')
Homeassistant('homeassistant', 'Homeassistant', 'an optional tech field')
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
' loads the Homeassistant element
include('simpleicons-4/H/Homeassistant')
Homeassistant('homeassistant', 'Homeassistant', 'an optional tech field')
@enduml
```
