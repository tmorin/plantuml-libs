# Pjsip

```text
simpleicons-4.1/P/Pjsip
```

```text
include('simpleicons-4.1/P/Pjsip')
```

|icon|element|
|---|---|
|![](Pjsip.png)|![](Pjsip.element.png)|



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
' loads the Pjsip element
include('simpleicons-4.1/P/Pjsip')
Pjsip('pjsip', 'Pjsip', 'an optional tech field')
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
' loads the Pjsip element
include('simpleicons-4.1/P/Pjsip')
Pjsip('pjsip', 'Pjsip', 'an optional tech field')
@enduml
```

