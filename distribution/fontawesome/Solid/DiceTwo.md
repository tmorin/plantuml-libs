# DiceTwo


```text
fontawesome/Solid/DiceTwo
```

```text
include('fontawesome/Solid/DiceTwo')
```



| Illustration | DiceTwo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DiceTwo.png) | ![illustration for DiceTwo](../../fontawesome/Solid/DiceTwo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiceTwoXs>`
- `<$DiceTwoSm>`
- `<$DiceTwoMd>`
- `<$DiceTwoLg>`





## DiceTwo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DiceTwo
include('fontawesome/Solid/DiceTwo')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element DiceTwo
include('fontawesome/Solid/DiceTwo')

' renders the element
DiceTwo('DiceTwo', 'Dice Two', 'an optional tech label', 'an optional description')
@enduml
```

