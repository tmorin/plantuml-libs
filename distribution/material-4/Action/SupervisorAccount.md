# SupervisorAccount


```text
material-4/Action/SupervisorAccount
```

```text
include('material-4/Action/SupervisorAccount')
```



| Illustration | SupervisorAccount |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SupervisorAccount.png) | ![illustration for SupervisorAccount](../../material-4/Action/SupervisorAccount.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SupervisorAccountXs>`
- `<$SupervisorAccountSm>`
- `<$SupervisorAccountMd>`
- `<$SupervisorAccountLg>`





## SupervisorAccount

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SupervisorAccount
include('material-4/Action/SupervisorAccount')

' renders the element
SupervisorAccount('SupervisorAccount', 'Supervisor Account', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element SupervisorAccount
include('material-4/Action/SupervisorAccount')

' renders the element
SupervisorAccount('SupervisorAccount', 'Supervisor Account', 'an optional tech label', 'an optional description')
@enduml
```

