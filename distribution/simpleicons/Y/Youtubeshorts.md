# Youtubeshorts


```text
simpleicons/Y/Youtubeshorts
```

```text
include('simpleicons/Y/Youtubeshorts')
```



| Illustration | Youtubeshorts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Y/Youtubeshorts.png) | ![illustration for Youtubeshorts](../../simpleicons/Y/Youtubeshorts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YoutubeshortsXs>`
- `<$YoutubeshortsSm>`
- `<$YoutubeshortsMd>`
- `<$YoutubeshortsLg>`





## Youtubeshorts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Youtubeshorts
include('simpleicons/Y/Youtubeshorts')

' renders the element
Youtubeshorts('Youtubeshorts', 'Youtubeshorts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Youtubeshorts
include('simpleicons/Y/Youtubeshorts')

' renders the element
Youtubeshorts('Youtubeshorts', 'Youtubeshorts', 'an optional tech label', 'an optional description')
@enduml
```

