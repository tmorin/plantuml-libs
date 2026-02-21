# OptinMonster


```text
fontawesome/Brands/OptinMonster
```

```text
include('fontawesome/Brands/OptinMonster')
```



| Illustration | OptinMonster |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/OptinMonster.png) | ![illustration for OptinMonster](../../fontawesome/Brands/OptinMonster.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OptinMonsterXs>`
- `<$OptinMonsterSm>`
- `<$OptinMonsterMd>`
- `<$OptinMonsterLg>`





## OptinMonster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element OptinMonster
include('fontawesome/Brands/OptinMonster')

' renders the element
OptinMonster('OptinMonster', 'Optin Monster', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element OptinMonster
include('fontawesome/Brands/OptinMonster')

' renders the element
OptinMonster('OptinMonster', 'Optin Monster', 'an optional tech label', 'an optional description')
@enduml
```

