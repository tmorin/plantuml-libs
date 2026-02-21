# DiceD6


```text
fontawesome/Solid/DiceD6
```

```text
include('fontawesome/Solid/DiceD6')
```



| Illustration | DiceD6 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DiceD6.png) | ![illustration for DiceD6](../../fontawesome/Solid/DiceD6.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiceD6Xs>`
- `<$DiceD6Sm>`
- `<$DiceD6Md>`
- `<$DiceD6Lg>`





## DiceD6

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DiceD6
include('fontawesome/Solid/DiceD6')

' renders the element
DiceD6('DiceD6', 'Dice D6', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DiceD6
include('fontawesome/Solid/DiceD6')

' renders the element
DiceD6('DiceD6', 'Dice D6', 'an optional tech label', 'an optional description')
@enduml
```

