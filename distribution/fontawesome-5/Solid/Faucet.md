# Faucet


```text
fontawesome-5/Solid/Faucet
```

```text
include('fontawesome-5/Solid/Faucet')
```



| Illustration | Faucet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Faucet.png) | ![illustration for Faucet](../../fontawesome-5/Solid/Faucet.Local.png) |




## Faucet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Faucet
include('fontawesome-5/Solid/Faucet')

' renders the element
Faucet('Faucet', 'Faucet', 'an optional tech label')
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

' loads the Item which embeds the element Faucet
include('fontawesome-5/Solid/Faucet')

' renders the element
Faucet('Faucet', 'Faucet', 'an optional tech label')
@enduml
```

