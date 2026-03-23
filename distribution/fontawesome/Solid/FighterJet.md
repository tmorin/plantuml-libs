# FighterJet


```text
fontawesome/Solid/FighterJet
```

```text
include('fontawesome/Solid/FighterJet')
```



| Illustration | FighterJet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FighterJet.png) | ![illustration for FighterJet](../../fontawesome/Solid/FighterJet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FighterJetXs>`
- `<$FighterJetSm>`
- `<$FighterJetMd>`
- `<$FighterJetLg>`





## FighterJet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FighterJet
include('fontawesome/Solid/FighterJet')

' renders the element
FighterJet('FighterJet', 'Fighter Jet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FighterJet
include('fontawesome/Solid/FighterJet')

' renders the element
FighterJet('FighterJet', 'Fighter Jet', 'an optional tech label', 'an optional description')
@enduml
```

