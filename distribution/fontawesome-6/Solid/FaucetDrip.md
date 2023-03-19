# FaucetDrip


```text
fontawesome-6/Solid/FaucetDrip
```

```text
include('fontawesome-6/Solid/FaucetDrip')
```



| Illustration | FaucetDrip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaucetDrip.png) | ![illustration for FaucetDrip](../../fontawesome-6/Solid/FaucetDrip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaucetDripXs>`
- `<$FaucetDripSm>`
- `<$FaucetDripMd>`
- `<$FaucetDripLg>`





## FaucetDrip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaucetDrip
include('fontawesome-6/Solid/FaucetDrip')

' renders the element
FaucetDrip('FaucetDrip', 'Faucet Drip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaucetDrip
include('fontawesome-6/Solid/FaucetDrip')

' renders the element
FaucetDrip('FaucetDrip', 'Faucet Drip', 'an optional tech label', 'an optional description')
@enduml
```

