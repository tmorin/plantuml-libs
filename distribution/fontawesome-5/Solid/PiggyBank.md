# PiggyBank


```text
fontawesome-5/Solid/PiggyBank
```

```text
include('fontawesome-5/Solid/PiggyBank')
```



| Illustration | PiggyBank |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PiggyBank.png) | ![illustration for PiggyBank](../../fontawesome-5/Solid/PiggyBank.Local.png) |




## PiggyBank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PiggyBank
include('fontawesome-5/Solid/PiggyBank')

' renders the element
PiggyBank('PiggyBank', 'Piggy Bank', 'an optional tech label')
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

' loads the Item which embeds the element PiggyBank
include('fontawesome-5/Solid/PiggyBank')

' renders the element
PiggyBank('PiggyBank', 'Piggy Bank', 'an optional tech label')
@enduml
```

