# OptinMonster


```text
fontawesome-5/Brands/OptinMonster
```

```text
include('fontawesome-5/Brands/OptinMonster')
```



| Illustration | OptinMonster |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/OptinMonster.png) | ![illustration for OptinMonster](../../fontawesome-5/Brands/OptinMonster.Local.png) |




## OptinMonster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element OptinMonster
include('fontawesome-5/Brands/OptinMonster')

' renders the element
OptinMonster('OptinMonster', 'Optin Monster', 'an optional tech label')
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

' loads the Item which embeds the element OptinMonster
include('fontawesome-5/Brands/OptinMonster')

' renders the element
OptinMonster('OptinMonster', 'Optin Monster', 'an optional tech label')
@enduml
```

