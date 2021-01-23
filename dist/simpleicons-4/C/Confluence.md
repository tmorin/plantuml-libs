# Confluence

```text
simpleicons-4/C/Confluence
```

```text
include('simpleicons-4/C/Confluence')
```

|icon|element|
|---|---|
|![](Confluence.png)|![](Confluence.element.png)|



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
' loads the Confluence element
include('simpleicons-4/C/Confluence')
Confluence('confluence', 'Confluence', 'an optional tech field')
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
' loads the Confluence element
include('simpleicons-4/C/Confluence')
Confluence('confluence', 'Confluence', 'an optional tech field')
@enduml
```

