# Windows

```text
simpleicons-4.1/W/Windows
```

```text
include('simpleicons-4.1/W/Windows')
```

|icon|element|
|---|---|
|![](Windows.png)|![](Windows.element.png)|



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
' loads the Windows element
include('simpleicons-4.1/W/Windows')
Windows('windows', 'Windows', 'an optional tech field')
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
' loads the Windows element
include('simpleicons-4.1/W/Windows')
Windows('windows', 'Windows', 'an optional tech field')
@enduml
```

