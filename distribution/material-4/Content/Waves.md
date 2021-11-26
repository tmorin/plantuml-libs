# Waves


```text
material-4/Content/Waves
```

```text
include('material-4/Content/Waves')
```



| Illustration | Waves |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Waves.png) | ![illustration for Waves](../../material-4/Content/Waves.Local.png) |




## Waves

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Waves
include('material-4/Content/Waves')

' renders the element
Waves('Waves', 'Waves', 'an optional tech label')
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

' loads the Item which embeds the element Waves
include('material-4/Content/Waves')

' renders the element
Waves('Waves', 'Waves', 'an optional tech label')
@enduml
```

