# HandHoldingUsd


```text
fontawesome-5/Solid/HandHoldingUsd
```

```text
include('fontawesome-5/Solid/HandHoldingUsd')
```



| Illustration | HandHoldingUsd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandHoldingUsd.png) | ![illustration for HandHoldingUsd](../../fontawesome-5/Solid/HandHoldingUsd.Local.png) |




## HandHoldingUsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandHoldingUsd
include('fontawesome-5/Solid/HandHoldingUsd')

' renders the element
HandHoldingUsd('HandHoldingUsd', 'Hand Holding Usd', 'an optional tech label')
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

' loads the Item which embeds the element HandHoldingUsd
include('fontawesome-5/Solid/HandHoldingUsd')

' renders the element
HandHoldingUsd('HandHoldingUsd', 'Hand Holding Usd', 'an optional tech label')
@enduml
```

