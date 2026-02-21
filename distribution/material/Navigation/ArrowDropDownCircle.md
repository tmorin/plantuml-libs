# ArrowDropDownCircle


```text
material/Navigation/ArrowDropDownCircle
```

```text
include('material/Navigation/ArrowDropDownCircle')
```



| Illustration | ArrowDropDownCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/ArrowDropDownCircle.png) | ![illustration for ArrowDropDownCircle](../../material/Navigation/ArrowDropDownCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowDropDownCircleXs>`
- `<$ArrowDropDownCircleSm>`
- `<$ArrowDropDownCircleMd>`
- `<$ArrowDropDownCircleLg>`





## ArrowDropDownCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ArrowDropDownCircle
include('material/Navigation/ArrowDropDownCircle')

' renders the element
ArrowDropDownCircle('ArrowDropDownCircle', 'Arrow Drop Down Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowDropDownCircle
include('material/Navigation/ArrowDropDownCircle')

' renders the element
ArrowDropDownCircle('ArrowDropDownCircle', 'Arrow Drop Down Circle', 'an optional tech label', 'an optional description')
@enduml
```

