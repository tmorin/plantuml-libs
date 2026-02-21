# Rotate


```text
fontawesome/Solid/Rotate
```

```text
include('fontawesome/Solid/Rotate')
```



| Illustration | Rotate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Rotate.png) | ![illustration for Rotate](../../fontawesome/Solid/Rotate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RotateXs>`
- `<$RotateSm>`
- `<$RotateMd>`
- `<$RotateLg>`





## Rotate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Rotate
include('fontawesome/Solid/Rotate')

' renders the element
Rotate('Rotate', 'Rotate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rotate
include('fontawesome/Solid/Rotate')

' renders the element
Rotate('Rotate', 'Rotate', 'an optional tech label', 'an optional description')
@enduml
```

