# BoltLightning


```text
fontawesome-6/Solid/BoltLightning
```

```text
include('fontawesome-6/Solid/BoltLightning')
```



| Illustration | BoltLightning |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BoltLightning.png) | ![illustration for BoltLightning](../../fontawesome-6/Solid/BoltLightning.Local.png) |




## BoltLightning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BoltLightning
include('fontawesome-6/Solid/BoltLightning')

' renders the element
BoltLightning('BoltLightning', 'Bolt Lightning', 'an optional tech label')
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

' loads the Item which embeds the element BoltLightning
include('fontawesome-6/Solid/BoltLightning')

' renders the element
BoltLightning('BoltLightning', 'Bolt Lightning', 'an optional tech label')
@enduml
```

