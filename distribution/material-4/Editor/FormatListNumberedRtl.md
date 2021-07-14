# FormatListNumberedRtl


```text
material-4/Editor/FormatListNumberedRtl
```

```text
include('material-4/Editor/FormatListNumberedRtl')
```



| Illustration | FormatListNumberedRtl |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatListNumberedRtl.png) | ![illustration for FormatListNumberedRtl](../../material-4/Editor/FormatListNumberedRtl.Local.png) |




## FormatListNumberedRtl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatListNumberedRtl
include('material-4/Editor/FormatListNumberedRtl')

' renders the element
FormatListNumberedRtl('FormatListNumberedRtl', 'Format List Numbered Rtl', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatListNumberedRtl
include('material-4/Editor/FormatListNumberedRtl')

' renders the element
FormatListNumberedRtl('FormatListNumberedRtl', 'Format List Numbered Rtl', 'an optional tech label')
@enduml
```

