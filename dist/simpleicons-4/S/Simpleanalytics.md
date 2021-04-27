# Simpleanalytics

```text
simpleicons-4/S/Simpleanalytics
```

```text
include('simpleicons-4/S/Simpleanalytics')
```

|icon|element|
|---|---|
|![](Simpleanalytics.png)|![](Simpleanalytics.element.png)|



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
' loads the Simpleanalytics element
include('simpleicons-4/S/Simpleanalytics')
Simpleanalytics('simpleanalytics', 'Simpleanalytics', 'an optional tech field')
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
' loads the Simpleanalytics element
include('simpleicons-4/S/Simpleanalytics')
Simpleanalytics('simpleanalytics', 'Simpleanalytics', 'an optional tech field')
@enduml
```

