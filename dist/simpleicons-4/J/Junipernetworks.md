# Junipernetworks

```text
simpleicons-4/J/Junipernetworks
```

```text
include('simpleicons-4/J/Junipernetworks')
```

|icon|element|
|---|---|
|![](Junipernetworks.png)|![](Junipernetworks.element.png)|



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
' loads the Junipernetworks element
include('simpleicons-4/J/Junipernetworks')
Junipernetworks('junipernetworks', 'Junipernetworks', 'an optional tech field')
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
' loads the Junipernetworks element
include('simpleicons-4/J/Junipernetworks')
Junipernetworks('junipernetworks', 'Junipernetworks', 'an optional tech field')
@enduml
```

