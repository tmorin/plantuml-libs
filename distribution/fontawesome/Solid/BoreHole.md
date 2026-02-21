# BoreHole


```text
fontawesome/Solid/BoreHole
```

```text
include('fontawesome/Solid/BoreHole')
```



| Illustration | BoreHole |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BoreHole.png) | ![illustration for BoreHole](../../fontawesome/Solid/BoreHole.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoreHoleXs>`
- `<$BoreHoleSm>`
- `<$BoreHoleMd>`
- `<$BoreHoleLg>`





## BoreHole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BoreHole
include('fontawesome/Solid/BoreHole')

' renders the element
BoreHole('BoreHole', 'Bore Hole', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BoreHole
include('fontawesome/Solid/BoreHole')

' renders the element
BoreHole('BoreHole', 'Bore Hole', 'an optional tech label', 'an optional description')
@enduml
```

