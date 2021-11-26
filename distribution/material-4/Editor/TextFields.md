# TextFields


```text
material-4/Editor/TextFields
```

```text
include('material-4/Editor/TextFields')
```



| Illustration | TextFields |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/TextFields.png) | ![illustration for TextFields](../../material-4/Editor/TextFields.Local.png) |




## TextFields

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TextFields
include('material-4/Editor/TextFields')

' renders the element
TextFields('TextFields', 'Text Fields', 'an optional tech label')
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

' loads the Item which embeds the element TextFields
include('material-4/Editor/TextFields')

' renders the element
TextFields('TextFields', 'Text Fields', 'an optional tech label')
@enduml
```

