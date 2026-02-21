# BarsStaggered


```text
fontawesome/Solid/BarsStaggered
```

```text
include('fontawesome/Solid/BarsStaggered')
```



| Illustration | BarsStaggered |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BarsStaggered.png) | ![illustration for BarsStaggered](../../fontawesome/Solid/BarsStaggered.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BarsStaggeredXs>`
- `<$BarsStaggeredSm>`
- `<$BarsStaggeredMd>`
- `<$BarsStaggeredLg>`





## BarsStaggered

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BarsStaggered
include('fontawesome/Solid/BarsStaggered')

' renders the element
BarsStaggered('BarsStaggered', 'Bars Staggered', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BarsStaggered
include('fontawesome/Solid/BarsStaggered')

' renders the element
BarsStaggered('BarsStaggered', 'Bars Staggered', 'an optional tech label', 'an optional description')
@enduml
```

