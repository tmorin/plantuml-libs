# CheckCircleOutline


```text
material-4/Action/CheckCircleOutline
```

```text
include('material-4/Action/CheckCircleOutline')
```



| Illustration | CheckCircleOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CheckCircleOutline.png) | ![illustration for CheckCircleOutline](../../material-4/Action/CheckCircleOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckCircleOutlineXs>`
- `<$CheckCircleOutlineSm>`
- `<$CheckCircleOutlineMd>`
- `<$CheckCircleOutlineLg>`





## CheckCircleOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CheckCircleOutline
include('material-4/Action/CheckCircleOutline')

' renders the element
CheckCircleOutline('CheckCircleOutline', 'Check Circle Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CheckCircleOutline
include('material-4/Action/CheckCircleOutline')

' renders the element
CheckCircleOutline('CheckCircleOutline', 'Check Circle Outline', 'an optional tech label', 'an optional description')
@enduml
```

