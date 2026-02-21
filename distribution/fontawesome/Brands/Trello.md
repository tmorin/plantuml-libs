# Trello


```text
fontawesome/Brands/Trello
```

```text
include('fontawesome/Brands/Trello')
```



| Illustration | Trello |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Trello.png) | ![illustration for Trello](../../fontawesome/Brands/Trello.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrelloXs>`
- `<$TrelloSm>`
- `<$TrelloMd>`
- `<$TrelloLg>`





## Trello

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Trello
include('fontawesome/Brands/Trello')

' renders the element
Trello('Trello', 'Trello', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trello
include('fontawesome/Brands/Trello')

' renders the element
Trello('Trello', 'Trello', 'an optional tech label', 'an optional description')
@enduml
```

