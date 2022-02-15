# HandHoldingDroplet


```text
fontawesome-6/Solid/HandHoldingDroplet
```

```text
include('fontawesome-6/Solid/HandHoldingDroplet')
```



| Illustration | HandHoldingDroplet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandHoldingDroplet.png) | ![illustration for HandHoldingDroplet](../../fontawesome-6/Solid/HandHoldingDroplet.Local.png) |




## HandHoldingDroplet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandHoldingDroplet
include('fontawesome-6/Solid/HandHoldingDroplet')

' renders the element
HandHoldingDroplet('HandHoldingDroplet', 'Hand Holding Droplet', 'an optional tech label')
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

' loads the Item which embeds the element HandHoldingDroplet
include('fontawesome-6/Solid/HandHoldingDroplet')

' renders the element
HandHoldingDroplet('HandHoldingDroplet', 'Hand Holding Droplet', 'an optional tech label')
@enduml
```

