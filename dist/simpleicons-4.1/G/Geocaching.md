# Geocaching

```text
simpleicons-4.1/G/Geocaching
```

```text
include('simpleicons-4.1/G/Geocaching')
```

|icon|element|
|---|---|
|![](Geocaching.png)|![](Geocaching.element.png)|



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
' loads the Geocaching element
include('simpleicons-4.1/G/Geocaching')
Geocaching('geocaching', 'Geocaching', 'an optional tech field')
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
' loads the Geocaching element
include('simpleicons-4.1/G/Geocaching')
Geocaching('geocaching', 'Geocaching', 'an optional tech field')
@enduml
```

