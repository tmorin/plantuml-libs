# RotateLeft


```text
fontawesome/Solid/RotateLeft
```

```text
include('fontawesome/Solid/RotateLeft')
```



| Illustration | RotateLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RotateLeft.png) | ![illustration for RotateLeft](../../fontawesome/Solid/RotateLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RotateLeftXs>`
- `<$RotateLeftSm>`
- `<$RotateLeftMd>`
- `<$RotateLeftLg>`





## RotateLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RotateLeft
include('fontawesome/Solid/RotateLeft')

' renders the element
RotateLeft('RotateLeft', 'Rotate Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RotateLeft
include('fontawesome/Solid/RotateLeft')

' renders the element
RotateLeft('RotateLeft', 'Rotate Left', 'an optional tech label', 'an optional description')
@enduml
```

