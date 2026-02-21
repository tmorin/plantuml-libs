# BowlRice


```text
fontawesome/Solid/BowlRice
```

```text
include('fontawesome/Solid/BowlRice')
```



| Illustration | BowlRice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BowlRice.png) | ![illustration for BowlRice](../../fontawesome/Solid/BowlRice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BowlRiceXs>`
- `<$BowlRiceSm>`
- `<$BowlRiceMd>`
- `<$BowlRiceLg>`





## BowlRice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BowlRice
include('fontawesome/Solid/BowlRice')

' renders the element
BowlRice('BowlRice', 'Bowl Rice', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BowlRice
include('fontawesome/Solid/BowlRice')

' renders the element
BowlRice('BowlRice', 'Bowl Rice', 'an optional tech label', 'an optional description')
@enduml
```

