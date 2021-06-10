# DiceTwo


```text
fontawesome-5/Solid/DiceTwo
```

```text
include('fontawesome-5/Solid/DiceTwo')
```



| Illustration | DiceTwo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/DiceTwo.png) | ![illustration for DiceTwo](../../fontawesome-5/Solid/DiceTwo.Local.png) |




## DiceTwo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DiceTwo
include('fontawesome-5/Solid/DiceTwo')

' renders the element
DiceTwo('DiceTwo', 'Dice Two', 'an optional tech label')
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

' loads the Item which embeds the element DiceTwo
include('fontawesome-5/Solid/DiceTwo')

' renders the element
DiceTwo('DiceTwo', 'Dice Two', 'an optional tech label')
@enduml
```

