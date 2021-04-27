# Detour

```text
eip/SystemManagement/Detour
```

```text
include('eip/SystemManagement/Detour')
```

|icon|element|
|---|---|
|![](Detour.png)|![](Detour.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the Detour element
include('eip/SystemManagement/Detour')
Detour('detour', 'Detour', 'an optional tech field')
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
' loads the eip bootstrap
include('eip/bootstrap')
' loads the Detour element
include('eip/SystemManagement/Detour')
Detour('detour', 'Detour', 'an optional tech field')
@enduml
```

