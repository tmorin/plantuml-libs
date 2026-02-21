# WeightHanging


```text
fontawesome/Solid/WeightHanging
```

```text
include('fontawesome/Solid/WeightHanging')
```



| Illustration | WeightHanging |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WeightHanging.png) | ![illustration for WeightHanging](../../fontawesome/Solid/WeightHanging.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WeightHangingXs>`
- `<$WeightHangingSm>`
- `<$WeightHangingMd>`
- `<$WeightHangingLg>`





## WeightHanging

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WeightHanging
include('fontawesome/Solid/WeightHanging')

' renders the element
WeightHanging('WeightHanging', 'Weight Hanging', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WeightHanging
include('fontawesome/Solid/WeightHanging')

' renders the element
WeightHanging('WeightHanging', 'Weight Hanging', 'an optional tech label', 'an optional description')
@enduml
```

