# Podcastindex


```text
simpleicons/P/Podcastindex
```

```text
include('simpleicons/P/Podcastindex')
```



| Illustration | Podcastindex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Podcastindex.png) | ![illustration for Podcastindex](../../simpleicons/P/Podcastindex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PodcastindexXs>`
- `<$PodcastindexSm>`
- `<$PodcastindexMd>`
- `<$PodcastindexLg>`





## Podcastindex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Podcastindex
include('simpleicons/P/Podcastindex')

' renders the element
Podcastindex('Podcastindex', 'Podcastindex', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Podcastindex
include('simpleicons/P/Podcastindex')

' renders the element
Podcastindex('Podcastindex', 'Podcastindex', 'an optional tech label', 'an optional description')
@enduml
```

