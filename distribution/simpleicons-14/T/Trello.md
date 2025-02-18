# Trello


```text
simpleicons-14/T/Trello
```

```text
include('simpleicons-14/T/Trello')
```



| Illustration | Trello |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Trello.png) | ![illustration for Trello](../../simpleicons-14/T/Trello.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Trello
include('simpleicons-14/T/Trello')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Trello
include('simpleicons-14/T/Trello')

' renders the element
Trello('Trello', 'Trello', 'an optional tech label', 'an optional description')
@enduml
```

