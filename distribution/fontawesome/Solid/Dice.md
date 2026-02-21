# Dice


```text
fontawesome/Solid/Dice
```

```text
include('fontawesome/Solid/Dice')
```



| Illustration | Dice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Dice.png) | ![illustration for Dice](../../fontawesome/Solid/Dice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiceXs>`
- `<$DiceSm>`
- `<$DiceMd>`
- `<$DiceLg>`





## Dice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dice
include('fontawesome/Solid/Dice')

' renders the element
Dice('Dice', 'Dice', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dice
include('fontawesome/Solid/Dice')

' renders the element
Dice('Dice', 'Dice', 'an optional tech label', 'an optional description')
@enduml
```

