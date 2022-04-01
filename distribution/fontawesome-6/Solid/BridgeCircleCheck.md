# BridgeCircleCheck


```text
fontawesome-6/Solid/BridgeCircleCheck
```

```text
include('fontawesome-6/Solid/BridgeCircleCheck')
```



| Illustration | BridgeCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BridgeCircleCheck.png) | ![illustration for BridgeCircleCheck](../../fontawesome-6/Solid/BridgeCircleCheck.Local.png) |




## BridgeCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BridgeCircleCheck
include('fontawesome-6/Solid/BridgeCircleCheck')

' renders the element
BridgeCircleCheck('BridgeCircleCheck', 'Bridge Circle Check', 'an optional tech label')
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

' loads the Item which embeds the element BridgeCircleCheck
include('fontawesome-6/Solid/BridgeCircleCheck')

' renders the element
BridgeCircleCheck('BridgeCircleCheck', 'Bridge Circle Check', 'an optional tech label')
@enduml
```

