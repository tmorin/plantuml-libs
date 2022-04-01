# BridgeCircleXmark


```text
fontawesome-6/Solid/BridgeCircleXmark
```

```text
include('fontawesome-6/Solid/BridgeCircleXmark')
```



| Illustration | BridgeCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BridgeCircleXmark.png) | ![illustration for BridgeCircleXmark](../../fontawesome-6/Solid/BridgeCircleXmark.Local.png) |




## BridgeCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BridgeCircleXmark
include('fontawesome-6/Solid/BridgeCircleXmark')

' renders the element
BridgeCircleXmark('BridgeCircleXmark', 'Bridge Circle Xmark', 'an optional tech label')
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

' loads the Item which embeds the element BridgeCircleXmark
include('fontawesome-6/Solid/BridgeCircleXmark')

' renders the element
BridgeCircleXmark('BridgeCircleXmark', 'Bridge Circle Xmark', 'an optional tech label')
@enduml
```

