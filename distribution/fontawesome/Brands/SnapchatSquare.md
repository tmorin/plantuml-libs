# SnapchatSquare


```text
fontawesome/Brands/SnapchatSquare
```

```text
include('fontawesome/Brands/SnapchatSquare')
```



| Illustration | SnapchatSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SnapchatSquare.png) | ![illustration for SnapchatSquare](../../fontawesome/Brands/SnapchatSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SnapchatSquareXs>`
- `<$SnapchatSquareSm>`
- `<$SnapchatSquareMd>`
- `<$SnapchatSquareLg>`





## SnapchatSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SnapchatSquare
include('fontawesome/Brands/SnapchatSquare')

' renders the element
SnapchatSquare('SnapchatSquare', 'Snapchat Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SnapchatSquare
include('fontawesome/Brands/SnapchatSquare')

' renders the element
SnapchatSquare('SnapchatSquare', 'Snapchat Square', 'an optional tech label', 'an optional description')
@enduml
```

