# RotateBack


```text
fontawesome/Solid/RotateBack
```

```text
include('fontawesome/Solid/RotateBack')
```



| Illustration | RotateBack |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RotateBack.png) | ![illustration for RotateBack](../../fontawesome/Solid/RotateBack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RotateBackXs>`
- `<$RotateBackSm>`
- `<$RotateBackMd>`
- `<$RotateBackLg>`





## RotateBack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RotateBack
include('fontawesome/Solid/RotateBack')

' renders the element
RotateBack('RotateBack', 'Rotate Back', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RotateBack
include('fontawesome/Solid/RotateBack')

' renders the element
RotateBack('RotateBack', 'Rotate Back', 'an optional tech label', 'an optional description')
@enduml
```

