# Googlepodcasts


```text
simpleicons-8/G/Googlepodcasts
```

```text
include('simpleicons-8/G/Googlepodcasts')
```



| Illustration | Googlepodcasts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googlepodcasts.png) | ![illustration for Googlepodcasts](../../simpleicons-8/G/Googlepodcasts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglepodcastsXs>`
- `<$GooglepodcastsSm>`
- `<$GooglepodcastsMd>`
- `<$GooglepodcastsLg>`





## Googlepodcasts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googlepodcasts
include('simpleicons-8/G/Googlepodcasts')

' renders the element
Googlepodcasts('Googlepodcasts', 'Googlepodcasts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlepodcasts
include('simpleicons-8/G/Googlepodcasts')

' renders the element
Googlepodcasts('Googlepodcasts', 'Googlepodcasts', 'an optional tech label', 'an optional description')
@enduml
```

