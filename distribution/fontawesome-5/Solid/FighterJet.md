# FighterJet


```text
fontawesome-5/Solid/FighterJet
```

```text
include('fontawesome-5/Solid/FighterJet')
```



| Illustration | FighterJet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FighterJet.png) | ![illustration for FighterJet](../../fontawesome-5/Solid/FighterJet.Local.png) |




## FighterJet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FighterJet
include('fontawesome-5/Solid/FighterJet')

' renders the element
FighterJet('FighterJet', 'Fighter Jet', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FighterJet
include('fontawesome-5/Solid/FighterJet')

' renders the element
FighterJet('FighterJet', 'Fighter Jet', 'an optional tech label')
@enduml
```

