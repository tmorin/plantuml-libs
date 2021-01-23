# Grubhub

```text
simpleicons-4/G/Grubhub
```

```text
include('simpleicons-4/G/Grubhub')
```

|icon|element|
|---|---|
|![](Grubhub.png)|![](Grubhub.element.png)|



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
' loads the Grubhub element
include('simpleicons-4/G/Grubhub')
Grubhub('grubhub', 'Grubhub', 'an optional tech field')
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
' loads the Grubhub element
include('simpleicons-4/G/Grubhub')
Grubhub('grubhub', 'Grubhub', 'an optional tech field')
@enduml
```

