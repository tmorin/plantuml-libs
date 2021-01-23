# Feathub

```text
simpleicons-4/F/Feathub
```

```text
include('simpleicons-4/F/Feathub')
```

|icon|element|
|---|---|
|![](Feathub.png)|![](Feathub.element.png)|



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
' loads the Feathub element
include('simpleicons-4/F/Feathub')
Feathub('feathub', 'Feathub', 'an optional tech field')
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
' loads the Feathub element
include('simpleicons-4/F/Feathub')
Feathub('feathub', 'Feathub', 'an optional tech field')
@enduml
```

