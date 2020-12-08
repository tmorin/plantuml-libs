# Adobe

```text
simpleicons-4.1/A/Adobe
```

```text
include('simpleicons-4.1/A/Adobe')
```

|icon|element|
|---|---|
|![](Adobe.png)|![](Adobe.element.png)|



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
' loads the Adobe element
include('simpleicons-4.1/A/Adobe')
Adobe('adobe', 'Adobe', 'an optional tech field')
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
' loads the Adobe element
include('simpleicons-4.1/A/Adobe')
Adobe('adobe', 'Adobe', 'an optional tech field')
@enduml
```

