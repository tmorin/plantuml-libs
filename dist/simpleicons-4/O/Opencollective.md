# Opencollective

```text
simpleicons-4/O/Opencollective
```

```text
include('simpleicons-4/O/Opencollective')
```

|icon|element|
|---|---|
|![](Opencollective.png)|![](Opencollective.element.png)|



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
' loads the Opencollective element
include('simpleicons-4/O/Opencollective')
Opencollective('opencollective', 'Opencollective', 'an optional tech field')
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
' loads the Opencollective element
include('simpleicons-4/O/Opencollective')
Opencollective('opencollective', 'Opencollective', 'an optional tech field')
@enduml
```

