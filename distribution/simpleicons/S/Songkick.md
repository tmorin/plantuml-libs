# Songkick


```text
simpleicons/S/Songkick
```

```text
include('simpleicons/S/Songkick')
```



| Illustration | Songkick |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Songkick.png) | ![illustration for Songkick](../../simpleicons/S/Songkick.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SongkickXs>`
- `<$SongkickSm>`
- `<$SongkickMd>`
- `<$SongkickLg>`





## Songkick

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Songkick
include('simpleicons/S/Songkick')

' renders the element
Songkick('Songkick', 'Songkick', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Songkick
include('simpleicons/S/Songkick')

' renders the element
Songkick('Songkick', 'Songkick', 'an optional tech label', 'an optional description')
@enduml
```

