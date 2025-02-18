# Shikimori


```text
simpleicons-14/S/Shikimori
```

```text
include('simpleicons-14/S/Shikimori')
```



| Illustration | Shikimori |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Shikimori.png) | ![illustration for Shikimori](../../simpleicons-14/S/Shikimori.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Shikimori
include('simpleicons-14/S/Shikimori')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Shikimori
include('simpleicons-14/S/Shikimori')

' renders the element
Shikimori('Shikimori', 'Shikimori', 'an optional tech label', 'an optional description')
@enduml
```

