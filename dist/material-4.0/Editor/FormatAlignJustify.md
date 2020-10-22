# Format Align Justify

```text
material-4.0/Editor/FormatAlignJustify
```

```text
include('material-4.0/Editor/FormatAlignJustify')
```

|icon|element|
|---|---|
|![](FormatAlignJustify.png)|![](FormatAlignJustify.element.png)|



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
' loads the FormatAlignJustify element
include('material-4.0/Editor/FormatAlignJustify')
FormatAlignJustify('format_align_justify', 'Format Align Justify', 'an optional tech field')
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
' loads the FormatAlignJustify element
include('material-4.0/Editor/FormatAlignJustify')
FormatAlignJustify('format_align_justify', 'Format Align Justify', 'an optional tech field')
@enduml
```

