# HandHoldingDroplet


```text
fontawesome/Solid/HandHoldingDroplet
```

```text
include('fontawesome/Solid/HandHoldingDroplet')
```



| Illustration | HandHoldingDroplet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandHoldingDroplet.png) | ![illustration for HandHoldingDroplet](../../fontawesome/Solid/HandHoldingDroplet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandHoldingDropletXs>`
- `<$HandHoldingDropletSm>`
- `<$HandHoldingDropletMd>`
- `<$HandHoldingDropletLg>`





## HandHoldingDroplet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandHoldingDroplet
include('fontawesome/Solid/HandHoldingDroplet')

' renders the element
HandHoldingDroplet('HandHoldingDroplet', 'Hand Holding Droplet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandHoldingDroplet
include('fontawesome/Solid/HandHoldingDroplet')

' renders the element
HandHoldingDroplet('HandHoldingDroplet', 'Hand Holding Droplet', 'an optional tech label', 'an optional description')
@enduml
```

