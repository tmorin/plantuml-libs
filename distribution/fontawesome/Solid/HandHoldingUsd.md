# HandHoldingUsd


```text
fontawesome/Solid/HandHoldingUsd
```

```text
include('fontawesome/Solid/HandHoldingUsd')
```



| Illustration | HandHoldingUsd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandHoldingUsd.png) | ![illustration for HandHoldingUsd](../../fontawesome/Solid/HandHoldingUsd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandHoldingUsdXs>`
- `<$HandHoldingUsdSm>`
- `<$HandHoldingUsdMd>`
- `<$HandHoldingUsdLg>`





## HandHoldingUsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandHoldingUsd
include('fontawesome/Solid/HandHoldingUsd')

' renders the element
HandHoldingUsd('HandHoldingUsd', 'Hand Holding Usd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandHoldingUsd
include('fontawesome/Solid/HandHoldingUsd')

' renders the element
HandHoldingUsd('HandHoldingUsd', 'Hand Holding Usd', 'an optional tech label', 'an optional description')
@enduml
```

