# ArrowForwardIos


```text
material-4/Navigation/ArrowForwardIos
```

```text
include('material-4/Navigation/ArrowForwardIos')
```



| Illustration | ArrowForwardIos |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/ArrowForwardIos.png) | ![illustration for ArrowForwardIos](../../material-4/Navigation/ArrowForwardIos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowForwardIosXs>`
- `<$ArrowForwardIosSm>`
- `<$ArrowForwardIosMd>`
- `<$ArrowForwardIosLg>`





## ArrowForwardIos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ArrowForwardIos
include('material-4/Navigation/ArrowForwardIos')

' renders the element
ArrowForwardIos('ArrowForwardIos', 'Arrow Forward Ios', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowForwardIos
include('material-4/Navigation/ArrowForwardIos')

' renders the element
ArrowForwardIos('ArrowForwardIos', 'Arrow Forward Ios', 'an optional tech label', 'an optional description')
@enduml
```

