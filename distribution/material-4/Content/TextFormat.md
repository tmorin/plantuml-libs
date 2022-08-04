# TextFormat


```text
material-4/Content/TextFormat
```

```text
include('material-4/Content/TextFormat')
```



| Illustration | TextFormat |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/TextFormat.png) | ![illustration for TextFormat](../../material-4/Content/TextFormat.Local.png) |




## TextFormat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TextFormat
include('material-4/Content/TextFormat')

' renders the element
TextFormat('TextFormat', 'Text Format', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TextFormat
include('material-4/Content/TextFormat')

' renders the element
TextFormat('TextFormat', 'Text Format', 'an optional tech label', 'an optional description')
@enduml
```

