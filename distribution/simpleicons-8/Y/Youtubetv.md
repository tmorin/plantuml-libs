# Youtubetv


```text
simpleicons-8/Y/Youtubetv
```

```text
include('simpleicons-8/Y/Youtubetv')
```



| Illustration | Youtubetv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Y/Youtubetv.png) | ![illustration for Youtubetv](../../simpleicons-8/Y/Youtubetv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YoutubetvXs>`
- `<$YoutubetvSm>`
- `<$YoutubetvMd>`
- `<$YoutubetvLg>`





## Youtubetv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Youtubetv
include('simpleicons-8/Y/Youtubetv')

' renders the element
Youtubetv('Youtubetv', 'Youtubetv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Youtubetv
include('simpleicons-8/Y/Youtubetv')

' renders the element
Youtubetv('Youtubetv', 'Youtubetv', 'an optional tech label', 'an optional description')
@enduml
```

