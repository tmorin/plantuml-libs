# FormatLineSpacing


```text
material-4/Editor/FormatLineSpacing
```

```text
include('material-4/Editor/FormatLineSpacing')
```



| Illustration | FormatLineSpacing |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatLineSpacing.png) | ![illustration for FormatLineSpacing](../../material-4/Editor/FormatLineSpacing.Local.png) |




## FormatLineSpacing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatLineSpacing
include('material-4/Editor/FormatLineSpacing')

' renders the element
FormatLineSpacing('FormatLineSpacing', 'Format Line Spacing', 'an optional tech label')
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

' loads the Item which embeds the element FormatLineSpacing
include('material-4/Editor/FormatLineSpacing')

' renders the element
FormatLineSpacing('FormatLineSpacing', 'Format Line Spacing', 'an optional tech label')
@enduml
```

