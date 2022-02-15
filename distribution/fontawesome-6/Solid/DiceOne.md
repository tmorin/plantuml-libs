# DiceOne


```text
fontawesome-6/Solid/DiceOne
```

```text
include('fontawesome-6/Solid/DiceOne')
```



| Illustration | DiceOne |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DiceOne.png) | ![illustration for DiceOne](../../fontawesome-6/Solid/DiceOne.Local.png) |




## DiceOne

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DiceOne
include('fontawesome-6/Solid/DiceOne')

' renders the element
DiceOne('DiceOne', 'Dice One', 'an optional tech label')
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

' loads the Item which embeds the element DiceOne
include('fontawesome-6/Solid/DiceOne')

' renders the element
DiceOne('DiceOne', 'Dice One', 'an optional tech label')
@enduml
```

