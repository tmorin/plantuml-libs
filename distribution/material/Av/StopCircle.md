# StopCircle


```text
material/Av/StopCircle
```

```text
include('material/Av/StopCircle')
```



| Illustration | StopCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/StopCircle.png) | ![illustration for StopCircle](../../material/Av/StopCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StopCircleXs>`
- `<$StopCircleSm>`
- `<$StopCircleMd>`
- `<$StopCircleLg>`





## StopCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element StopCircle
include('material/Av/StopCircle')

' renders the element
StopCircle('StopCircle', 'Stop Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StopCircle
include('material/Av/StopCircle')

' renders the element
StopCircle('StopCircle', 'Stop Circle', 'an optional tech label', 'an optional description')
@enduml
```

