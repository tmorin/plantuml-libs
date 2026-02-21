# BridgeCircleExclamation


```text
fontawesome/Solid/BridgeCircleExclamation
```

```text
include('fontawesome/Solid/BridgeCircleExclamation')
```



| Illustration | BridgeCircleExclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BridgeCircleExclamation.png) | ![illustration for BridgeCircleExclamation](../../fontawesome/Solid/BridgeCircleExclamation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BridgeCircleExclamationXs>`
- `<$BridgeCircleExclamationSm>`
- `<$BridgeCircleExclamationMd>`
- `<$BridgeCircleExclamationLg>`





## BridgeCircleExclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BridgeCircleExclamation
include('fontawesome/Solid/BridgeCircleExclamation')

' renders the element
BridgeCircleExclamation('BridgeCircleExclamation', 'Bridge Circle Exclamation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BridgeCircleExclamation
include('fontawesome/Solid/BridgeCircleExclamation')

' renders the element
BridgeCircleExclamation('BridgeCircleExclamation', 'Bridge Circle Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

