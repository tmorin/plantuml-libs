# Deck


```text
material/Social/Deck
```

```text
include('material/Social/Deck')
```



| Illustration | Deck |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Deck.png) | ![illustration for Deck](../../material/Social/Deck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeckXs>`
- `<$DeckSm>`
- `<$DeckMd>`
- `<$DeckLg>`





## Deck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Deck
include('material/Social/Deck')

' renders the element
Deck('Deck', 'Deck', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Deck
include('material/Social/Deck')

' renders the element
Deck('Deck', 'Deck', 'an optional tech label', 'an optional description')
@enduml
```

