# Dice


```text
fontawesome-5/Solid/Dice
```

```text
include('fontawesome-5/Solid/Dice')
```



| Illustration | Dice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Dice.png) | ![illustration for Dice](../../fontawesome-5/Solid/Dice.Local.png) |




## Dice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dice
include('fontawesome-5/Solid/Dice')

' renders the element
Dice('Dice', 'Dice', 'an optional tech label')
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

' loads the Item which embeds the element Dice
include('fontawesome-5/Solid/Dice')

' renders the element
Dice('Dice', 'Dice', 'an optional tech label')
@enduml
```

