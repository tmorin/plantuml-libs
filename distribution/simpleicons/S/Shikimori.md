# Shikimori


```text
simpleicons/S/Shikimori
```

```text
include('simpleicons/S/Shikimori')
```



| Illustration | Shikimori |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Shikimori.png) | ![illustration for Shikimori](../../simpleicons/S/Shikimori.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShikimoriXs>`
- `<$ShikimoriSm>`
- `<$ShikimoriMd>`
- `<$ShikimoriLg>`





## Shikimori

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Shikimori
include('simpleicons/S/Shikimori')

' renders the element
Shikimori('Shikimori', 'Shikimori', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shikimori
include('simpleicons/S/Shikimori')

' renders the element
Shikimori('Shikimori', 'Shikimori', 'an optional tech label', 'an optional description')
@enduml
```

