# EnvelopeSquare


```text
fontawesome-5/Solid/EnvelopeSquare
```

```text
include('fontawesome-5/Solid/EnvelopeSquare')
```



| Illustration | EnvelopeSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/EnvelopeSquare.png) | ![illustration for EnvelopeSquare](../../fontawesome-5/Solid/EnvelopeSquare.Local.png) |




## EnvelopeSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element EnvelopeSquare
include('fontawesome-5/Solid/EnvelopeSquare')

' renders the element
EnvelopeSquare('EnvelopeSquare', 'Envelope Square', 'an optional tech label')
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

' loads the Item which embeds the element EnvelopeSquare
include('fontawesome-5/Solid/EnvelopeSquare')

' renders the element
EnvelopeSquare('EnvelopeSquare', 'Envelope Square', 'an optional tech label')
@enduml
```

