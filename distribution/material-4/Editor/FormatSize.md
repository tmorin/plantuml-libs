# FormatSize


```text
material-4/Editor/FormatSize
```

```text
include('material-4/Editor/FormatSize')
```



| Illustration | FormatSize |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatSize.png) | ![illustration for FormatSize](../../material-4/Editor/FormatSize.Local.png) |




## FormatSize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatSize
include('material-4/Editor/FormatSize')

' renders the element
FormatSize('FormatSize', 'Format Size', 'an optional tech label')
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

' loads the Item which embeds the element FormatSize
include('material-4/Editor/FormatSize')

' renders the element
FormatSize('FormatSize', 'Format Size', 'an optional tech label')
@enduml
```

