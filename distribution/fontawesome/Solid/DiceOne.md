# DiceOne


```text
fontawesome/Solid/DiceOne
```

```text
include('fontawesome/Solid/DiceOne')
```



| Illustration | DiceOne |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DiceOne.png) | ![illustration for DiceOne](../../fontawesome/Solid/DiceOne.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiceOneXs>`
- `<$DiceOneSm>`
- `<$DiceOneMd>`
- `<$DiceOneLg>`





## DiceOne

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DiceOne
include('fontawesome/Solid/DiceOne')

' renders the element
DiceOne('DiceOne', 'Dice One', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DiceOne
include('fontawesome/Solid/DiceOne')

' renders the element
DiceOne('DiceOne', 'Dice One', 'an optional tech label', 'an optional description')
@enduml
```

