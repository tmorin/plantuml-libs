# Beatstars


```text
simpleicons/B/Beatstars
```

```text
include('simpleicons/B/Beatstars')
```



| Illustration | Beatstars |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Beatstars.png) | ![illustration for Beatstars](../../simpleicons/B/Beatstars.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BeatstarsXs>`
- `<$BeatstarsSm>`
- `<$BeatstarsMd>`
- `<$BeatstarsLg>`





## Beatstars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Beatstars
include('simpleicons/B/Beatstars')

' renders the element
Beatstars('Beatstars', 'Beatstars', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Beatstars
include('simpleicons/B/Beatstars')

' renders the element
Beatstars('Beatstars', 'Beatstars', 'an optional tech label', 'an optional description')
@enduml
```

