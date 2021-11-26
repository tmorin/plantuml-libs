# Casino


```text
material-4/Places/Casino
```

```text
include('material-4/Places/Casino')
```



| Illustration | Casino |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Casino.png) | ![illustration for Casino](../../material-4/Places/Casino.Local.png) |




## Casino

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Casino
include('material-4/Places/Casino')

' renders the element
Casino('Casino', 'Casino', 'an optional tech label')
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

' loads the Item which embeds the element Casino
include('material-4/Places/Casino')

' renders the element
Casino('Casino', 'Casino', 'an optional tech label')
@enduml
```

