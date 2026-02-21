# Faucet


```text
fontawesome/Solid/Faucet
```

```text
include('fontawesome/Solid/Faucet')
```



| Illustration | Faucet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Faucet.png) | ![illustration for Faucet](../../fontawesome/Solid/Faucet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaucetXs>`
- `<$FaucetSm>`
- `<$FaucetMd>`
- `<$FaucetLg>`





## Faucet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Faucet
include('fontawesome/Solid/Faucet')

' renders the element
Faucet('Faucet', 'Faucet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Faucet
include('fontawesome/Solid/Faucet')

' renders the element
Faucet('Faucet', 'Faucet', 'an optional tech label', 'an optional description')
@enduml
```

