# DiceD6


```text
fontawesome-6/Solid/DiceD6
```

```text
include('fontawesome-6/Solid/DiceD6')
```



| Illustration | DiceD6 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DiceD6.png) | ![illustration for DiceD6](../../fontawesome-6/Solid/DiceD6.Local.png) |




## DiceD6

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DiceD6
include('fontawesome-6/Solid/DiceD6')

' renders the element
DiceD6('DiceD6', 'Dice D6', 'an optional tech label')
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

' loads the Item which embeds the element DiceD6
include('fontawesome-6/Solid/DiceD6')

' renders the element
DiceD6('DiceD6', 'Dice D6', 'an optional tech label')
@enduml
```

