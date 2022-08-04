# DonutSmall


```text
material-4/Action/DonutSmall
```

```text
include('material-4/Action/DonutSmall')
```



| Illustration | DonutSmall |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/DonutSmall.png) | ![illustration for DonutSmall](../../material-4/Action/DonutSmall.Local.png) |




## DonutSmall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DonutSmall
include('material-4/Action/DonutSmall')

' renders the element
DonutSmall('DonutSmall', 'Donut Small', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DonutSmall
include('material-4/Action/DonutSmall')

' renders the element
DonutSmall('DonutSmall', 'Donut Small', 'an optional tech label', 'an optional description')
@enduml
```

