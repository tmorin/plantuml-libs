# Language


```text
fontawesome-5/Solid/Language
```

```text
include('fontawesome-5/Solid/Language')
```



| Illustration | Language |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Language.png) | ![illustration for Language](../../fontawesome-5/Solid/Language.Local.png) |




## Language

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Language
include('fontawesome-5/Solid/Language')

' renders the element
Language('Language', 'Language', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Language
include('fontawesome-5/Solid/Language')

' renders the element
Language('Language', 'Language', 'an optional tech label')
@enduml
```

