# LegendToggle


```text
material/Navigation/LegendToggle
```

```text
include('material/Navigation/LegendToggle')
```



| Illustration | LegendToggle |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/LegendToggle.png) | ![illustration for LegendToggle](../../material/Navigation/LegendToggle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LegendToggleXs>`
- `<$LegendToggleSm>`
- `<$LegendToggleMd>`
- `<$LegendToggleLg>`





## LegendToggle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LegendToggle
include('material/Navigation/LegendToggle')

' renders the element
LegendToggle('LegendToggle', 'Legend Toggle', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element LegendToggle
include('material/Navigation/LegendToggle')

' renders the element
LegendToggle('LegendToggle', 'Legend Toggle', 'an optional tech label', 'an optional description')
@enduml
```

