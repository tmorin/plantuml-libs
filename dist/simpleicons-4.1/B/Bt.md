# Bt

```text
simpleicons-4.1/B/Bt
```

```text
include('simpleicons-4.1/B/Bt')
```

|icon|element|
|---|---|
|![](Bt.png)|![](Bt.element.png)|



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
' loads the Bt element
include('simpleicons-4.1/B/Bt')
Bt('bt', 'Bt', 'an optional tech field')
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
' loads the Bt element
include('simpleicons-4.1/B/Bt')
Bt('bt', 'Bt', 'an optional tech field')
@enduml
```

