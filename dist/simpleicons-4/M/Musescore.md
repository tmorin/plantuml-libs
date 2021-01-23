# Musescore

```text
simpleicons-4/M/Musescore
```

```text
include('simpleicons-4/M/Musescore')
```

|icon|element|
|---|---|
|![](Musescore.png)|![](Musescore.element.png)|



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
' loads the Musescore element
include('simpleicons-4/M/Musescore')
Musescore('musescore', 'Musescore', 'an optional tech field')
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
' loads the Musescore element
include('simpleicons-4/M/Musescore')
Musescore('musescore', 'Musescore', 'an optional tech field')
@enduml
```

