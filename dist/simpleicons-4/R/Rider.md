# Rider

```text
simpleicons-4/R/Rider
```

```text
include('simpleicons-4/R/Rider')
```

|icon|element|
|---|---|
|![](Rider.png)|![](Rider.element.png)|



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
' loads the Rider element
include('simpleicons-4/R/Rider')
Rider('rider', 'Rider', 'an optional tech field')
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
' loads the Rider element
include('simpleicons-4/R/Rider')
Rider('rider', 'Rider', 'an optional tech field')
@enduml
```

