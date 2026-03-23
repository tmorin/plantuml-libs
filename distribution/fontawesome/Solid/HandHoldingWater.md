# HandHoldingWater


```text
fontawesome/Solid/HandHoldingWater
```

```text
include('fontawesome/Solid/HandHoldingWater')
```



| Illustration | HandHoldingWater |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandHoldingWater.png) | ![illustration for HandHoldingWater](../../fontawesome/Solid/HandHoldingWater.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandHoldingWaterXs>`
- `<$HandHoldingWaterSm>`
- `<$HandHoldingWaterMd>`
- `<$HandHoldingWaterLg>`





## HandHoldingWater

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandHoldingWater
include('fontawesome/Solid/HandHoldingWater')

' renders the element
HandHoldingWater('HandHoldingWater', 'Hand Holding Water', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandHoldingWater
include('fontawesome/Solid/HandHoldingWater')

' renders the element
HandHoldingWater('HandHoldingWater', 'Hand Holding Water', 'an optional tech label', 'an optional description')
@enduml
```

