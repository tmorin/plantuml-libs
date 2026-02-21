# Watchtower


```text
simpleicons-14/W/Watchtower
```

```text
include('simpleicons-14/W/Watchtower')
```



| Illustration | Watchtower |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Watchtower.png) | ![illustration for Watchtower](../../simpleicons-14/W/Watchtower.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WatchtowerXs>`
- `<$WatchtowerSm>`
- `<$WatchtowerMd>`
- `<$WatchtowerLg>`





## Watchtower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Watchtower
include('simpleicons-14/W/Watchtower')

' renders the element
Watchtower('Watchtower', 'Watchtower', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Watchtower
include('simpleicons-14/W/Watchtower')

' renders the element
Watchtower('Watchtower', 'Watchtower', 'an optional tech label', 'an optional description')
@enduml
```

