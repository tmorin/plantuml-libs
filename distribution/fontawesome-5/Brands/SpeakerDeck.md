# SpeakerDeck


```text
fontawesome-5/Brands/SpeakerDeck
```

```text
include('fontawesome-5/Brands/SpeakerDeck')
```



| Illustration | SpeakerDeck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/SpeakerDeck.png) | ![illustration for SpeakerDeck](../../fontawesome-5/Brands/SpeakerDeck.Local.png) |




## SpeakerDeck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SpeakerDeck
include('fontawesome-5/Brands/SpeakerDeck')

' renders the element
SpeakerDeck('SpeakerDeck', 'Speaker Deck', 'an optional tech label')
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

' loads the Item which embeds the element SpeakerDeck
include('fontawesome-5/Brands/SpeakerDeck')

' renders the element
SpeakerDeck('SpeakerDeck', 'Speaker Deck', 'an optional tech label')
@enduml
```

