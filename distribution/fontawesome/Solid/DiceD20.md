# DiceD20


```text
fontawesome/Solid/DiceD20
```

```text
include('fontawesome/Solid/DiceD20')
```



| Illustration | DiceD20 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DiceD20.png) | ![illustration for DiceD20](../../fontawesome/Solid/DiceD20.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiceD20Xs>`
- `<$DiceD20Sm>`
- `<$DiceD20Md>`
- `<$DiceD20Lg>`





## DiceD20

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DiceD20
include('fontawesome/Solid/DiceD20')

' renders the element
DiceD20('DiceD20', 'Dice D20', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DiceD20
include('fontawesome/Solid/DiceD20')

' renders the element
DiceD20('DiceD20', 'Dice D20', 'an optional tech label', 'an optional description')
@enduml
```

