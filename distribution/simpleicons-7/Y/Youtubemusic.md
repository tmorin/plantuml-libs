# Youtubemusic


```text
simpleicons-7/Y/Youtubemusic
```

```text
include('simpleicons-7/Y/Youtubemusic')
```



| Illustration | Youtubemusic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Y/Youtubemusic.png) | ![illustration for Youtubemusic](../../simpleicons-7/Y/Youtubemusic.Local.png) |




## Youtubemusic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Youtubemusic
include('simpleicons-7/Y/Youtubemusic')

' renders the element
Youtubemusic('Youtubemusic', 'Youtubemusic', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Youtubemusic
include('simpleicons-7/Y/Youtubemusic')

' renders the element
Youtubemusic('Youtubemusic', 'Youtubemusic', 'an optional tech label', 'an optional description')
@enduml
```

