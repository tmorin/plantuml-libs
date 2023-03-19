# FillDrip


```text
fontawesome-6/Solid/FillDrip
```

```text
include('fontawesome-6/Solid/FillDrip')
```



| Illustration | FillDrip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FillDrip.png) | ![illustration for FillDrip](../../fontawesome-6/Solid/FillDrip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FillDripXs>`
- `<$FillDripSm>`
- `<$FillDripMd>`
- `<$FillDripLg>`





## FillDrip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FillDrip
include('fontawesome-6/Solid/FillDrip')

' renders the element
FillDrip('FillDrip', 'Fill Drip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FillDrip
include('fontawesome-6/Solid/FillDrip')

' renders the element
FillDrip('FillDrip', 'Fill Drip', 'an optional tech label', 'an optional description')
@enduml
```

