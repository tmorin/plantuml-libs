# FormatClear


```text
material-4/Editor/FormatClear
```

```text
include('material-4/Editor/FormatClear')
```



| Illustration | FormatClear |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatClear.png) | ![illustration for FormatClear](../../material-4/Editor/FormatClear.Local.png) |




## FormatClear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatClear
include('material-4/Editor/FormatClear')

' renders the element
FormatClear('FormatClear', 'Format Clear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatClear
include('material-4/Editor/FormatClear')

' renders the element
FormatClear('FormatClear', 'Format Clear', 'an optional tech label', 'an optional description')
@enduml
```

