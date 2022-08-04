# FormatBold


```text
material-4/Editor/FormatBold
```

```text
include('material-4/Editor/FormatBold')
```



| Illustration | FormatBold |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatBold.png) | ![illustration for FormatBold](../../material-4/Editor/FormatBold.Local.png) |




## FormatBold

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatBold
include('material-4/Editor/FormatBold')

' renders the element
FormatBold('FormatBold', 'Format Bold', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatBold
include('material-4/Editor/FormatBold')

' renders the element
FormatBold('FormatBold', 'Format Bold', 'an optional tech label', 'an optional description')
@enduml
```

