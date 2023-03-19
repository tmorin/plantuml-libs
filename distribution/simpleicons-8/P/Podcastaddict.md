# Podcastaddict


```text
simpleicons-8/P/Podcastaddict
```

```text
include('simpleicons-8/P/Podcastaddict')
```



| Illustration | Podcastaddict |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Podcastaddict.png) | ![illustration for Podcastaddict](../../simpleicons-8/P/Podcastaddict.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PodcastaddictXs>`
- `<$PodcastaddictSm>`
- `<$PodcastaddictMd>`
- `<$PodcastaddictLg>`





## Podcastaddict

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Podcastaddict
include('simpleicons-8/P/Podcastaddict')

' renders the element
Podcastaddict('Podcastaddict', 'Podcastaddict', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Podcastaddict
include('simpleicons-8/P/Podcastaddict')

' renders the element
Podcastaddict('Podcastaddict', 'Podcastaddict', 'an optional tech label', 'an optional description')
@enduml
```

