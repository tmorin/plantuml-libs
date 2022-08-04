# SpeakerDeck


```text
fontawesome-6/Brands/SpeakerDeck
```

```text
include('fontawesome-6/Brands/SpeakerDeck')
```



| Illustration | SpeakerDeck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SpeakerDeck.png) | ![illustration for SpeakerDeck](../../fontawesome-6/Brands/SpeakerDeck.Local.png) |




## SpeakerDeck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SpeakerDeck
include('fontawesome-6/Brands/SpeakerDeck')

' renders the element
SpeakerDeck('SpeakerDeck', 'Speaker Deck', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SpeakerDeck
include('fontawesome-6/Brands/SpeakerDeck')

' renders the element
SpeakerDeck('SpeakerDeck', 'Speaker Deck', 'an optional tech label', 'an optional description')
@enduml
```

