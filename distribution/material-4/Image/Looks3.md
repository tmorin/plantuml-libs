# Looks3


```text
material-4/Image/Looks3
```

```text
include('material-4/Image/Looks3')
```



| Illustration | Looks3 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Looks3.png) | ![illustration for Looks3](../../material-4/Image/Looks3.Local.png) |




## Looks3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Looks3
include('material-4/Image/Looks3')

' renders the element
Looks3('Looks3', 'Looks3', 'an optional tech label')
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

' loads the Item which embeds the element Looks3
include('material-4/Image/Looks3')

' renders the element
Looks3('Looks3', 'Looks3', 'an optional tech label')
@enduml
```

