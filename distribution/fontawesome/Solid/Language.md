# Language


```text
fontawesome/Solid/Language
```

```text
include('fontawesome/Solid/Language')
```



| Illustration | Language |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Language.png) | ![illustration for Language](../../fontawesome/Solid/Language.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LanguageXs>`
- `<$LanguageSm>`
- `<$LanguageMd>`
- `<$LanguageLg>`





## Language

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Language
include('fontawesome/Solid/Language')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Language
include('fontawesome/Solid/Language')

' renders the element
Language('Language', 'Language', 'an optional tech label', 'an optional description')
@enduml
```

