# DiceThree


```text
fontawesome-6/Solid/DiceThree
```

```text
include('fontawesome-6/Solid/DiceThree')
```



| Illustration | DiceThree |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DiceThree.png) | ![illustration for DiceThree](../../fontawesome-6/Solid/DiceThree.Local.png) |




## DiceThree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DiceThree
include('fontawesome-6/Solid/DiceThree')

' renders the element
DiceThree('DiceThree', 'Dice Three', 'an optional tech label')
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

' loads the Item which embeds the element DiceThree
include('fontawesome-6/Solid/DiceThree')

' renders the element
DiceThree('DiceThree', 'Dice Three', 'an optional tech label')
@enduml
```

