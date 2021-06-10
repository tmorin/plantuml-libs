# DiceD20


```text
fontawesome-5/Solid/DiceD20
```

```text
include('fontawesome-5/Solid/DiceD20')
```



| Illustration | DiceD20 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/DiceD20.png) | ![illustration for DiceD20](../../fontawesome-5/Solid/DiceD20.Local.png) |




## DiceD20

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DiceD20
include('fontawesome-5/Solid/DiceD20')

' renders the element
DiceD20('DiceD20', 'Dice D20', 'an optional tech label')
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

' loads the Item which embeds the element DiceD20
include('fontawesome-5/Solid/DiceD20')

' renders the element
DiceD20('DiceD20', 'Dice D20', 'an optional tech label')
@enduml
```

