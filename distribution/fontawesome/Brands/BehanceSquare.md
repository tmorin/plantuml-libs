# BehanceSquare


```text
fontawesome/Brands/BehanceSquare
```

```text
include('fontawesome/Brands/BehanceSquare')
```



| Illustration | BehanceSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/BehanceSquare.png) | ![illustration for BehanceSquare](../../fontawesome/Brands/BehanceSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BehanceSquareXs>`
- `<$BehanceSquareSm>`
- `<$BehanceSquareMd>`
- `<$BehanceSquareLg>`





## BehanceSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BehanceSquare
include('fontawesome/Brands/BehanceSquare')

' renders the element
BehanceSquare('BehanceSquare', 'Behance Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BehanceSquare
include('fontawesome/Brands/BehanceSquare')

' renders the element
BehanceSquare('BehanceSquare', 'Behance Square', 'an optional tech label', 'an optional description')
@enduml
```

