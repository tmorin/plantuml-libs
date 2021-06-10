# SignLanguage


```text
fontawesome-5/Solid/SignLanguage
```

```text
include('fontawesome-5/Solid/SignLanguage')
```



| Illustration | SignLanguage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SignLanguage.png) | ![illustration for SignLanguage](../../fontawesome-5/Solid/SignLanguage.Local.png) |




## SignLanguage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SignLanguage
include('fontawesome-5/Solid/SignLanguage')

' renders the element
SignLanguage('SignLanguage', 'Sign Language', 'an optional tech label')
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

' loads the Item which embeds the element SignLanguage
include('fontawesome-5/Solid/SignLanguage')

' renders the element
SignLanguage('SignLanguage', 'Sign Language', 'an optional tech label')
@enduml
```

