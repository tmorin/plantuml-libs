# WeightScale


```text
fontawesome/Solid/WeightScale
```

```text
include('fontawesome/Solid/WeightScale')
```



| Illustration | WeightScale |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WeightScale.png) | ![illustration for WeightScale](../../fontawesome/Solid/WeightScale.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WeightScaleXs>`
- `<$WeightScaleSm>`
- `<$WeightScaleMd>`
- `<$WeightScaleLg>`





## WeightScale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WeightScale
include('fontawesome/Solid/WeightScale')

' renders the element
WeightScale('WeightScale', 'Weight Scale', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WeightScale
include('fontawesome/Solid/WeightScale')

' renders the element
WeightScale('WeightScale', 'Weight Scale', 'an optional tech label', 'an optional description')
@enduml
```

