# EnvelopeOpenText


```text
fontawesome-5/Solid/EnvelopeOpenText
```

```text
include('fontawesome-5/Solid/EnvelopeOpenText')
```



| Illustration | EnvelopeOpenText |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/EnvelopeOpenText.png) | ![illustration for EnvelopeOpenText](../../fontawesome-5/Solid/EnvelopeOpenText.Local.png) |




## EnvelopeOpenText

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element EnvelopeOpenText
include('fontawesome-5/Solid/EnvelopeOpenText')

' renders the element
EnvelopeOpenText('EnvelopeOpenText', 'Envelope Open Text', 'an optional tech label')
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

' loads the Item which embeds the element EnvelopeOpenText
include('fontawesome-5/Solid/EnvelopeOpenText')

' renders the element
EnvelopeOpenText('EnvelopeOpenText', 'Envelope Open Text', 'an optional tech label')
@enduml
```

