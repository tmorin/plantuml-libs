# Scissors


```text
fontawesome-6/Solid/Scissors
```

```text
include('fontawesome-6/Solid/Scissors')
```



| Illustration | Scissors |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Scissors.png) | ![illustration for Scissors](../../fontawesome-6/Solid/Scissors.Local.png) |




## Scissors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Scissors
include('fontawesome-6/Solid/Scissors')

' renders the element
Scissors('Scissors', 'Scissors', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scissors
include('fontawesome-6/Solid/Scissors')

' renders the element
Scissors('Scissors', 'Scissors', 'an optional tech label', 'an optional description')
@enduml
```

