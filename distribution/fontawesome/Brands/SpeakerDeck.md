# SpeakerDeck


```text
fontawesome/Brands/SpeakerDeck
```

```text
include('fontawesome/Brands/SpeakerDeck')
```



| Illustration | SpeakerDeck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SpeakerDeck.png) | ![illustration for SpeakerDeck](../../fontawesome/Brands/SpeakerDeck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpeakerDeckXs>`
- `<$SpeakerDeckSm>`
- `<$SpeakerDeckMd>`
- `<$SpeakerDeckLg>`





## SpeakerDeck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SpeakerDeck
include('fontawesome/Brands/SpeakerDeck')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element SpeakerDeck
include('fontawesome/Brands/SpeakerDeck')

' renders the element
SpeakerDeck('SpeakerDeck', 'Speaker Deck', 'an optional tech label', 'an optional description')
@enduml
```

