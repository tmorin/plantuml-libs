# Pi Hole

```text
simpleicons-4.1/P/PiHole
```

```text
include('simpleicons-4.1/P/PiHole')
```

|icon|element|
|---|---|
|![](PiHole.png)|![](PiHole.element.png)|



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
' loads the PiHole element
include('simpleicons-4.1/P/PiHole')
PiHole('pi_hole', 'Pi Hole', 'an optional tech field')
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
' loads the PiHole element
include('simpleicons-4.1/P/PiHole')
PiHole('pi_hole', 'Pi Hole', 'an optional tech field')
@enduml
```

