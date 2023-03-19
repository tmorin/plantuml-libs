# Timer10


```text
material-4/Image/Timer10
```

```text
include('material-4/Image/Timer10')
```



| Illustration | Timer10 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Timer10.png) | ![illustration for Timer10](../../material-4/Image/Timer10.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Timer10Xs>`
- `<$Timer10Sm>`
- `<$Timer10Md>`
- `<$Timer10Lg>`





## Timer10

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Timer10
include('material-4/Image/Timer10')

' renders the element
Timer10('Timer10', 'Timer10', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Timer10
include('material-4/Image/Timer10')

' renders the element
Timer10('Timer10', 'Timer10', 'an optional tech label', 'an optional description')
@enduml
```

