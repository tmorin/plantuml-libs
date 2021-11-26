# Brightness3


```text
material-4/Image/Brightness3
```

```text
include('material-4/Image/Brightness3')
```



| Illustration | Brightness3 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Brightness3.png) | ![illustration for Brightness3](../../material-4/Image/Brightness3.Local.png) |




## Brightness3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Brightness3
include('material-4/Image/Brightness3')

' renders the element
Brightness3('Brightness3', 'Brightness3', 'an optional tech label')
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

' loads the Item which embeds the element Brightness3
include('material-4/Image/Brightness3')

' renders the element
Brightness3('Brightness3', 'Brightness3', 'an optional tech label')
@enduml
```

