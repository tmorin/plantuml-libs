# BellConcierge


```text
fontawesome-6/Solid/BellConcierge
```

```text
include('fontawesome-6/Solid/BellConcierge')
```



| Illustration | BellConcierge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BellConcierge.png) | ![illustration for BellConcierge](../../fontawesome-6/Solid/BellConcierge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BellConciergeXs>`
- `<$BellConciergeSm>`
- `<$BellConciergeMd>`
- `<$BellConciergeLg>`





## BellConcierge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BellConcierge
include('fontawesome-6/Solid/BellConcierge')

' renders the element
BellConcierge('BellConcierge', 'Bell Concierge', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BellConcierge
include('fontawesome-6/Solid/BellConcierge')

' renders the element
BellConcierge('BellConcierge', 'Bell Concierge', 'an optional tech label', 'an optional description')
@enduml
```

