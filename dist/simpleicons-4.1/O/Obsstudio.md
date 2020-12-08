# Obsstudio

```text
simpleicons-4.1/O/Obsstudio
```

```text
include('simpleicons-4.1/O/Obsstudio')
```

|icon|element|
|---|---|
|![](Obsstudio.png)|![](Obsstudio.element.png)|



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
' loads the Obsstudio element
include('simpleicons-4.1/O/Obsstudio')
Obsstudio('obsstudio', 'Obsstudio', 'an optional tech field')
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
' loads the Obsstudio element
include('simpleicons-4.1/O/Obsstudio')
Obsstudio('obsstudio', 'Obsstudio', 'an optional tech field')
@enduml
```

