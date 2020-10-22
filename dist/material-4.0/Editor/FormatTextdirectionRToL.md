# Format Textdirection R To L

```text
material-4.0/Editor/FormatTextdirectionRToL
```

```text
include('material-4.0/Editor/FormatTextdirectionRToL')
```

|icon|element|
|---|---|
|![](FormatTextdirectionRToL.png)|![](FormatTextdirectionRToL.element.png)|



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
' loads the FormatTextdirectionRToL element
include('material-4.0/Editor/FormatTextdirectionRToL')
FormatTextdirectionRToL('format_textdirection_r_to_l', 'Format Textdirection R To L', 'an optional tech field')
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
' loads the FormatTextdirectionRToL element
include('material-4.0/Editor/FormatTextdirectionRToL')
FormatTextdirectionRToL('format_textdirection_r_to_l', 'Format Textdirection R To L', 'an optional tech field')
@enduml
```

