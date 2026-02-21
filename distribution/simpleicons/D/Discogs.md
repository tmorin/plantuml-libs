# Discogs


```text
simpleicons/D/Discogs
```

```text
include('simpleicons/D/Discogs')
```



| Illustration | Discogs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Discogs.png) | ![illustration for Discogs](../../simpleicons/D/Discogs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiscogsXs>`
- `<$DiscogsSm>`
- `<$DiscogsMd>`
- `<$DiscogsLg>`





## Discogs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Discogs
include('simpleicons/D/Discogs')

' renders the element
Discogs('Discogs', 'Discogs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Discogs
include('simpleicons/D/Discogs')

' renders the element
Discogs('Discogs', 'Discogs', 'an optional tech label', 'an optional description')
@enduml
```

