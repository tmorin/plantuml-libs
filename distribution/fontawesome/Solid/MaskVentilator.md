# MaskVentilator


```text
fontawesome/Solid/MaskVentilator
```

```text
include('fontawesome/Solid/MaskVentilator')
```



| Illustration | MaskVentilator |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MaskVentilator.png) | ![illustration for MaskVentilator](../../fontawesome/Solid/MaskVentilator.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaskVentilatorXs>`
- `<$MaskVentilatorSm>`
- `<$MaskVentilatorMd>`
- `<$MaskVentilatorLg>`





## MaskVentilator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MaskVentilator
include('fontawesome/Solid/MaskVentilator')

' renders the element
MaskVentilator('MaskVentilator', 'Mask Ventilator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MaskVentilator
include('fontawesome/Solid/MaskVentilator')

' renders the element
MaskVentilator('MaskVentilator', 'Mask Ventilator', 'an optional tech label', 'an optional description')
@enduml
```

