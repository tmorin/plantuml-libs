# Hipchat

```text
simpleicons-4.1/H/Hipchat
```

```text
include('simpleicons-4.1/H/Hipchat')
```

|icon|element|
|---|---|
|![](Hipchat.png)|![](Hipchat.element.png)|



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
' loads the Hipchat element
include('simpleicons-4.1/H/Hipchat')
Hipchat('hipchat', 'Hipchat', 'an optional tech field')
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
' loads the Hipchat element
include('simpleicons-4.1/H/Hipchat')
Hipchat('hipchat', 'Hipchat', 'an optional tech field')
@enduml
```

