# Format Clear

```text
material-4.0/Editor/FormatClear
```

```text
include('material-4.0/Editor/FormatClear')
```

|icon|element|
|---|---|
|![](FormatClear.png)|![](FormatClear.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the FormatClear element
include('material-4.0/Editor/FormatClear')
FormatClear('format_clear', 'Format Clear', 'an optional tech field')
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
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the FormatClear element
include('material-4.0/Editor/FormatClear')
FormatClear('format_clear', 'Format Clear', 'an optional tech field')
@enduml
```

