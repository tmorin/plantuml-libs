# Boardgamegeek


```text
simpleicons-8/B/Boardgamegeek
```

```text
include('simpleicons-8/B/Boardgamegeek')
```



| Illustration | Boardgamegeek |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Boardgamegeek.png) | ![illustration for Boardgamegeek](../../simpleicons-8/B/Boardgamegeek.Local.png) |




## Boardgamegeek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Boardgamegeek
include('simpleicons-8/B/Boardgamegeek')

' renders the element
Boardgamegeek('Boardgamegeek', 'Boardgamegeek', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Boardgamegeek
include('simpleicons-8/B/Boardgamegeek')

' renders the element
Boardgamegeek('Boardgamegeek', 'Boardgamegeek', 'an optional tech label', 'an optional description')
@enduml
```

