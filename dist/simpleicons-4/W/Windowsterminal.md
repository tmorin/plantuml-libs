# Windowsterminal

```text
simpleicons-4/W/Windowsterminal
```

```text
include('simpleicons-4/W/Windowsterminal')
```

|icon|element|
|---|---|
|![](Windowsterminal.png)|![](Windowsterminal.element.png)|



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
' loads the Windowsterminal element
include('simpleicons-4/W/Windowsterminal')
Windowsterminal('windowsterminal', 'Windowsterminal', 'an optional tech field')
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
' loads the Windowsterminal element
include('simpleicons-4/W/Windowsterminal')
Windowsterminal('windowsterminal', 'Windowsterminal', 'an optional tech field')
@enduml
```

