# Voicemail


```text
fontawesome-5/Solid/Voicemail
```

```text
include('fontawesome-5/Solid/Voicemail')
```



| Illustration | Voicemail |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Voicemail.png) | ![illustration for Voicemail](../../fontawesome-5/Solid/Voicemail.Local.png) |




## Voicemail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Voicemail
include('fontawesome-5/Solid/Voicemail')

' renders the element
Voicemail('Voicemail', 'Voicemail', 'an optional tech label')
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

' loads the Item which embeds the element Voicemail
include('fontawesome-5/Solid/Voicemail')

' renders the element
Voicemail('Voicemail', 'Voicemail', 'an optional tech label')
@enduml
```

