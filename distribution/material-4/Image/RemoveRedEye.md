# RemoveRedEye


```text
material-4/Image/RemoveRedEye
```

```text
include('material-4/Image/RemoveRedEye')
```



| Illustration | RemoveRedEye |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/RemoveRedEye.png) | ![illustration for RemoveRedEye](../../material-4/Image/RemoveRedEye.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemoveRedEyeXs>`
- `<$RemoveRedEyeSm>`
- `<$RemoveRedEyeMd>`
- `<$RemoveRedEyeLg>`





## RemoveRedEye

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RemoveRedEye
include('material-4/Image/RemoveRedEye')

' renders the element
RemoveRedEye('RemoveRedEye', 'Remove Red Eye', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RemoveRedEye
include('material-4/Image/RemoveRedEye')

' renders the element
RemoveRedEye('RemoveRedEye', 'Remove Red Eye', 'an optional tech label', 'an optional description')
@enduml
```

