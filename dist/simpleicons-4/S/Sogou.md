# Sogou

```text
simpleicons-4/S/Sogou
```

```text
include('simpleicons-4/S/Sogou')
```

|icon|element|
|---|---|
|![](Sogou.png)|![](Sogou.element.png)|



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
' loads the Sogou element
include('simpleicons-4/S/Sogou')
Sogou('sogou', 'Sogou', 'an optional tech field')
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
' loads the Sogou element
include('simpleicons-4/S/Sogou')
Sogou('sogou', 'Sogou', 'an optional tech field')
@enduml
```

