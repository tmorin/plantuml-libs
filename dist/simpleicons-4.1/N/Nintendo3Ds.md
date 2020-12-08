# Nintendo3 Ds

```text
simpleicons-4.1/N/Nintendo3Ds
```

```text
include('simpleicons-4.1/N/Nintendo3Ds')
```

|icon|element|
|---|---|
|![](Nintendo3Ds.png)|![](Nintendo3Ds.element.png)|



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
' loads the Nintendo3Ds element
include('simpleicons-4.1/N/Nintendo3Ds')
Nintendo3Ds('nintendo_3_ds', 'Nintendo3 Ds', 'an optional tech field')
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
' loads the Nintendo3Ds element
include('simpleicons-4.1/N/Nintendo3Ds')
Nintendo3Ds('nintendo_3_ds', 'Nintendo3 Ds', 'an optional tech field')
@enduml
```

