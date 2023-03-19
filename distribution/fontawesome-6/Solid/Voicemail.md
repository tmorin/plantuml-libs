# Voicemail


```text
fontawesome-6/Solid/Voicemail
```

```text
include('fontawesome-6/Solid/Voicemail')
```



| Illustration | Voicemail |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Voicemail.png) | ![illustration for Voicemail](../../fontawesome-6/Solid/Voicemail.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VoicemailXs>`
- `<$VoicemailSm>`
- `<$VoicemailMd>`
- `<$VoicemailLg>`





## Voicemail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Voicemail
include('fontawesome-6/Solid/Voicemail')

' renders the element
Voicemail('Voicemail', 'Voicemail', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Voicemail
include('fontawesome-6/Solid/Voicemail')

' renders the element
Voicemail('Voicemail', 'Voicemail', 'an optional tech label', 'an optional description')
@enduml
```

