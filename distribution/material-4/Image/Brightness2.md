# Brightness2


```text
material-4/Image/Brightness2
```

```text
include('material-4/Image/Brightness2')
```



| Illustration | Brightness2 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Brightness2.png) | ![illustration for Brightness2](../../material-4/Image/Brightness2.Local.png) |




## Brightness2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Brightness2
include('material-4/Image/Brightness2')

' renders the element
Brightness2('Brightness2', 'Brightness2', 'an optional tech label')
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

' loads the Item which embeds the element Brightness2
include('material-4/Image/Brightness2')

' renders the element
Brightness2('Brightness2', 'Brightness2', 'an optional tech label')
@enduml
```

