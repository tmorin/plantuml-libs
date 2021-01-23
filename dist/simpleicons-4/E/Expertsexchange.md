# Expertsexchange

```text
simpleicons-4/E/Expertsexchange
```

```text
include('simpleicons-4/E/Expertsexchange')
```

|icon|element|
|---|---|
|![](Expertsexchange.png)|![](Expertsexchange.element.png)|



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
' loads the Expertsexchange element
include('simpleicons-4/E/Expertsexchange')
Expertsexchange('expertsexchange', 'Expertsexchange', 'an optional tech field')
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
' loads the Expertsexchange element
include('simpleicons-4/E/Expertsexchange')
Expertsexchange('expertsexchange', 'Expertsexchange', 'an optional tech field')
@enduml
```

