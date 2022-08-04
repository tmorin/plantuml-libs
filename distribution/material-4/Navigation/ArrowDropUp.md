# ArrowDropUp


```text
material-4/Navigation/ArrowDropUp
```

```text
include('material-4/Navigation/ArrowDropUp')
```



| Illustration | ArrowDropUp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/ArrowDropUp.png) | ![illustration for ArrowDropUp](../../material-4/Navigation/ArrowDropUp.Local.png) |




## ArrowDropUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ArrowDropUp
include('material-4/Navigation/ArrowDropUp')

' renders the element
ArrowDropUp('ArrowDropUp', 'Arrow Drop Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowDropUp
include('material-4/Navigation/ArrowDropUp')

' renders the element
ArrowDropUp('ArrowDropUp', 'Arrow Drop Up', 'an optional tech label', 'an optional description')
@enduml
```

