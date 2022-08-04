# Brightness5


```text
material-4/Image/Brightness5
```

```text
include('material-4/Image/Brightness5')
```



| Illustration | Brightness5 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Brightness5.png) | ![illustration for Brightness5](../../material-4/Image/Brightness5.Local.png) |




## Brightness5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Brightness5
include('material-4/Image/Brightness5')

' renders the element
Brightness5('Brightness5', 'Brightness5', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Brightness5
include('material-4/Image/Brightness5')

' renders the element
Brightness5('Brightness5', 'Brightness5', 'an optional tech label', 'an optional description')
@enduml
```

