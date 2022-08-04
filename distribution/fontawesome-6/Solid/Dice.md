# Dice


```text
fontawesome-6/Solid/Dice
```

```text
include('fontawesome-6/Solid/Dice')
```



| Illustration | Dice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Dice.png) | ![illustration for Dice](../../fontawesome-6/Solid/Dice.Local.png) |




## Dice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Dice
include('fontawesome-6/Solid/Dice')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Dice
include('fontawesome-6/Solid/Dice')

' renders the element
Dice('Dice', 'Dice', 'an optional tech label', 'an optional description')
@enduml
```

