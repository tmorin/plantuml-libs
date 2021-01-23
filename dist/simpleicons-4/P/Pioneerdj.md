# Pioneerdj

```text
simpleicons-4/P/Pioneerdj
```

```text
include('simpleicons-4/P/Pioneerdj')
```

|icon|element|
|---|---|
|![](Pioneerdj.png)|![](Pioneerdj.element.png)|



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
' loads the Pioneerdj element
include('simpleicons-4/P/Pioneerdj')
Pioneerdj('pioneerdj', 'Pioneerdj', 'an optional tech field')
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
' loads the Pioneerdj element
include('simpleicons-4/P/Pioneerdj')
Pioneerdj('pioneerdj', 'Pioneerdj', 'an optional tech field')
@enduml
```

