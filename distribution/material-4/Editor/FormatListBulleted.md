# FormatListBulleted


```text
material-4/Editor/FormatListBulleted
```

```text
include('material-4/Editor/FormatListBulleted')
```



| Illustration | FormatListBulleted |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatListBulleted.png) | ![illustration for FormatListBulleted](../../material-4/Editor/FormatListBulleted.Local.png) |




## FormatListBulleted

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatListBulleted
include('material-4/Editor/FormatListBulleted')

' renders the element
FormatListBulleted('FormatListBulleted', 'Format List Bulleted', 'an optional tech label')
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

' loads the Item which embeds the element FormatListBulleted
include('material-4/Editor/FormatListBulleted')

' renders the element
FormatListBulleted('FormatListBulleted', 'Format List Bulleted', 'an optional tech label')
@enduml
```

