# DiceTwo


```text
fontawesome-6/Solid/DiceTwo
```

```text
include('fontawesome-6/Solid/DiceTwo')
```



| Illustration | DiceTwo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DiceTwo.png) | ![illustration for DiceTwo](../../fontawesome-6/Solid/DiceTwo.Local.png) |




## DiceTwo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DiceTwo
include('fontawesome-6/Solid/DiceTwo')

' renders the element
DiceTwo('DiceTwo', 'Dice Two', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DiceTwo
include('fontawesome-6/Solid/DiceTwo')

' renders the element
DiceTwo('DiceTwo', 'Dice Two', 'an optional tech label', 'an optional description')
@enduml
```

