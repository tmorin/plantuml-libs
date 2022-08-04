# Brightness6


```text
material-4/Image/Brightness6
```

```text
include('material-4/Image/Brightness6')
```



| Illustration | Brightness6 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Brightness6.png) | ![illustration for Brightness6](../../material-4/Image/Brightness6.Local.png) |




## Brightness6

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Brightness6
include('material-4/Image/Brightness6')

' renders the element
Brightness6('Brightness6', 'Brightness6', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Brightness6
include('material-4/Image/Brightness6')

' renders the element
Brightness6('Brightness6', 'Brightness6', 'an optional tech label', 'an optional description')
@enduml
```

