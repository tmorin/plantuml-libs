# SnapchatGhost


```text
fontawesome/Brands/SnapchatGhost
```

```text
include('fontawesome/Brands/SnapchatGhost')
```



| Illustration | SnapchatGhost |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SnapchatGhost.png) | ![illustration for SnapchatGhost](../../fontawesome/Brands/SnapchatGhost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SnapchatGhostXs>`
- `<$SnapchatGhostSm>`
- `<$SnapchatGhostMd>`
- `<$SnapchatGhostLg>`





## SnapchatGhost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SnapchatGhost
include('fontawesome/Brands/SnapchatGhost')

' renders the element
SnapchatGhost('SnapchatGhost', 'Snapchat Ghost', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element SnapchatGhost
include('fontawesome/Brands/SnapchatGhost')

' renders the element
SnapchatGhost('SnapchatGhost', 'Snapchat Ghost', 'an optional tech label', 'an optional description')
@enduml
```

