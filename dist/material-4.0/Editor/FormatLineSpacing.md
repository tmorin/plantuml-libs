# Format Line Spacing

```text
material-4.0/Editor/FormatLineSpacing
```

```text
include('material-4.0/Editor/FormatLineSpacing')
```

|icon|element|
|---|---|
|![](FormatLineSpacing.png)|![](FormatLineSpacing.element.png)|



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
' loads the FormatLineSpacing element
include('material-4.0/Editor/FormatLineSpacing')
FormatLineSpacing('format_line_spacing', 'Format Line Spacing', 'an optional tech field')
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
' loads the FormatLineSpacing element
include('material-4.0/Editor/FormatLineSpacing')
FormatLineSpacing('format_line_spacing', 'Format Line Spacing', 'an optional tech field')
@enduml
```

