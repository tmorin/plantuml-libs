# Speaker Deck

```text
fontawesome-5.15/Brands/SpeakerDeck
```

```text
include('fontawesome-5.15/Brands/SpeakerDeck')
```

|icon|element|
|---|---|
|![](SpeakerDeck.png)|![](SpeakerDeck.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the SpeakerDeck element
include('fontawesome-5.15/Brands/SpeakerDeck')
SpeakerDeck('speaker_deck', 'Speaker Deck', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the SpeakerDeck element
include('fontawesome-5.15/Brands/SpeakerDeck')
SpeakerDeck('speaker_deck', 'Speaker Deck', 'an optional tech field')
@enduml
```

