# CheckCircle


```text
material-4/Action/CheckCircle
```

```text
include('material-4/Action/CheckCircle')
```



| Illustration | CheckCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CheckCircle.png) | ![illustration for CheckCircle](../../material-4/Action/CheckCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckCircleXs>`
- `<$CheckCircleSm>`
- `<$CheckCircleMd>`
- `<$CheckCircleLg>`





## CheckCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CheckCircle
include('material-4/Action/CheckCircle')

' renders the element
CheckCircle('CheckCircle', 'Check Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CheckCircle
include('material-4/Action/CheckCircle')

' renders the element
CheckCircle('CheckCircle', 'Check Circle', 'an optional tech label', 'an optional description')
@enduml
```

