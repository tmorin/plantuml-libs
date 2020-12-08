# Windows95

```text
simpleicons-4.1/W/Windows95
```

```text
include('simpleicons-4.1/W/Windows95')
```

|icon|element|
|---|---|
|![](Windows95.png)|![](Windows95.element.png)|



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
' loads the Windows95 element
include('simpleicons-4.1/W/Windows95')
Windows95('windows_95', 'Windows95', 'an optional tech field')
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
' loads the Windows95 element
include('simpleicons-4.1/W/Windows95')
Windows95('windows_95', 'Windows95', 'an optional tech field')
@enduml
```

