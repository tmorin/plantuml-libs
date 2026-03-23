# PrayingHands


```text
fontawesome/Solid/PrayingHands
```

```text
include('fontawesome/Solid/PrayingHands')
```



| Illustration | PrayingHands |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PrayingHands.png) | ![illustration for PrayingHands](../../fontawesome/Solid/PrayingHands.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrayingHandsXs>`
- `<$PrayingHandsSm>`
- `<$PrayingHandsMd>`
- `<$PrayingHandsLg>`





## PrayingHands

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PrayingHands
include('fontawesome/Solid/PrayingHands')

' renders the element
PrayingHands('PrayingHands', 'Praying Hands', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PrayingHands
include('fontawesome/Solid/PrayingHands')

' renders the element
PrayingHands('PrayingHands', 'Praying Hands', 'an optional tech label', 'an optional description')
@enduml
```

