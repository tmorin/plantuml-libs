# DiceThree


```text
fontawesome-5/Solid/DiceThree
```

```text
include('fontawesome-5/Solid/DiceThree')
```



| Illustration | DiceThree |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/DiceThree.png) | ![illustration for DiceThree](../../fontawesome-5/Solid/DiceThree.Local.png) |




## DiceThree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DiceThree
include('fontawesome-5/Solid/DiceThree')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DiceThree
include('fontawesome-5/Solid/DiceThree')

' renders the element
DiceThree('DiceThree', 'Dice Three', 'an optional tech label')
@enduml
```

