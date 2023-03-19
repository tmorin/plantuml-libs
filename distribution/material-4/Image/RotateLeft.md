# RotateLeft


```text
material-4/Image/RotateLeft
```

```text
include('material-4/Image/RotateLeft')
```



| Illustration | RotateLeft |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/RotateLeft.png) | ![illustration for RotateLeft](../../material-4/Image/RotateLeft.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element RotateLeft
include('material-4/Image/RotateLeft')

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
include('material-4/bootstrap')

' loads the Item which embeds the element RotateLeft
include('material-4/Image/RotateLeft')

' renders the element
RotateLeft('RotateLeft', 'Rotate Left', 'an optional tech label', 'an optional description')
@enduml
```

