# Imou

```text
simpleicons-4/I/Imou
```

```text
include('simpleicons-4/I/Imou')
```

|icon|element|
|---|---|
|![](Imou.png)|![](Imou.element.png)|



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
' loads the Imou element
include('simpleicons-4/I/Imou')
Imou('imou', 'Imou', 'an optional tech field')
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
' loads the Imou element
include('simpleicons-4/I/Imou')
Imou('imou', 'Imou', 'an optional tech field')
@enduml
```

