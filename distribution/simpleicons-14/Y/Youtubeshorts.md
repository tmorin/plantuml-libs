# Youtubeshorts


```text
simpleicons-14/Y/Youtubeshorts
```

```text
include('simpleicons-14/Y/Youtubeshorts')
```



| Illustration | Youtubeshorts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Youtubeshorts.png) | ![illustration for Youtubeshorts](../../simpleicons-14/Y/Youtubeshorts.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Youtubeshorts
include('simpleicons-14/Y/Youtubeshorts')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Youtubeshorts
include('simpleicons-14/Y/Youtubeshorts')

' renders the element
Youtubeshorts('Youtubeshorts', 'Youtubeshorts', 'an optional tech label', 'an optional description')
@enduml
```

