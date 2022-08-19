# Lens


```text
material-4/Image/Lens
```

```text
include('material-4/Image/Lens')
```



| Illustration | Lens |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Lens.png) | ![illustration for Lens](../../material-4/Image/Lens.Local.png) |




## Lens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Lens
include('material-4/Image/Lens')

' renders the element
Lens('Lens', 'Lens', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lens
include('material-4/Image/Lens')

' renders the element
Lens('Lens', 'Lens', 'an optional tech label', 'an optional description')
@enduml
```
