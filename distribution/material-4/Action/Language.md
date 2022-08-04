# Language


```text
material-4/Action/Language
```

```text
include('material-4/Action/Language')
```



| Illustration | Language |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Language.png) | ![illustration for Language](../../material-4/Action/Language.Local.png) |




## Language

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Language
include('material-4/Action/Language')

' renders the element
Language('Language', 'Language', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Language
include('material-4/Action/Language')

' renders the element
Language('Language', 'Language', 'an optional tech label', 'an optional description')
@enduml
```

