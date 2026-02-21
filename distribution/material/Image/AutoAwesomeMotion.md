# AutoAwesomeMotion


```text
material/Image/AutoAwesomeMotion
```

```text
include('material/Image/AutoAwesomeMotion')
```



| Illustration | AutoAwesomeMotion |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/AutoAwesomeMotion.png) | ![illustration for AutoAwesomeMotion](../../material/Image/AutoAwesomeMotion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutoAwesomeMotionXs>`
- `<$AutoAwesomeMotionSm>`
- `<$AutoAwesomeMotionMd>`
- `<$AutoAwesomeMotionLg>`





## AutoAwesomeMotion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AutoAwesomeMotion
include('material/Image/AutoAwesomeMotion')

' renders the element
AutoAwesomeMotion('AutoAwesomeMotion', 'Auto Awesome Motion', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element AutoAwesomeMotion
include('material/Image/AutoAwesomeMotion')

' renders the element
AutoAwesomeMotion('AutoAwesomeMotion', 'Auto Awesome Motion', 'an optional tech label', 'an optional description')
@enduml
```

