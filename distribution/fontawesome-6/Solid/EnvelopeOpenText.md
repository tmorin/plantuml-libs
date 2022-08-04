# EnvelopeOpenText


```text
fontawesome-6/Solid/EnvelopeOpenText
```

```text
include('fontawesome-6/Solid/EnvelopeOpenText')
```



| Illustration | EnvelopeOpenText |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/EnvelopeOpenText.png) | ![illustration for EnvelopeOpenText](../../fontawesome-6/Solid/EnvelopeOpenText.Local.png) |




## EnvelopeOpenText

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EnvelopeOpenText
include('fontawesome-6/Solid/EnvelopeOpenText')

' renders the element
EnvelopeOpenText('EnvelopeOpenText', 'Envelope Open Text', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EnvelopeOpenText
include('fontawesome-6/Solid/EnvelopeOpenText')

' renders the element
EnvelopeOpenText('EnvelopeOpenText', 'Envelope Open Text', 'an optional tech label', 'an optional description')
@enduml
```

