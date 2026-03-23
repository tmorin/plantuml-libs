# SignLanguage


```text
fontawesome/Solid/SignLanguage
```

```text
include('fontawesome/Solid/SignLanguage')
```



| Illustration | SignLanguage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SignLanguage.png) | ![illustration for SignLanguage](../../fontawesome/Solid/SignLanguage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignLanguageXs>`
- `<$SignLanguageSm>`
- `<$SignLanguageMd>`
- `<$SignLanguageLg>`





## SignLanguage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SignLanguage
include('fontawesome/Solid/SignLanguage')

' renders the element
SignLanguage('SignLanguage', 'Sign Language', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignLanguage
include('fontawesome/Solid/SignLanguage')

' renders the element
SignLanguage('SignLanguage', 'Sign Language', 'an optional tech label', 'an optional description')
@enduml
```

