# FormatListNumbered


```text
material-4/Editor/FormatListNumbered
```

```text
include('material-4/Editor/FormatListNumbered')
```



| Illustration | FormatListNumbered |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatListNumbered.png) | ![illustration for FormatListNumbered](../../material-4/Editor/FormatListNumbered.Local.png) |




## FormatListNumbered

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatListNumbered
include('material-4/Editor/FormatListNumbered')

' renders the element
FormatListNumbered('FormatListNumbered', 'Format List Numbered', 'an optional tech label')
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

' loads the Item which embeds the element FormatListNumbered
include('material-4/Editor/FormatListNumbered')

' renders the element
FormatListNumbered('FormatListNumbered', 'Format List Numbered', 'an optional tech label')
@enduml
```

