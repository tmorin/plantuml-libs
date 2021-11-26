# LegendToggle


```text
material-4/Navigation/LegendToggle
```

```text
include('material-4/Navigation/LegendToggle')
```



| Illustration | LegendToggle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/LegendToggle.png) | ![illustration for LegendToggle](../../material-4/Navigation/LegendToggle.Local.png) |




## LegendToggle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LegendToggle
include('material-4/Navigation/LegendToggle')

' renders the element
LegendToggle('LegendToggle', 'Legend Toggle', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element LegendToggle
include('material-4/Navigation/LegendToggle')

' renders the element
LegendToggle('LegendToggle', 'Legend Toggle', 'an optional tech label')
@enduml
```

