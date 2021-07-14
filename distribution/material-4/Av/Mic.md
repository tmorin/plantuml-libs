# Mic


```text
material-4/Av/Mic
```

```text
include('material-4/Av/Mic')
```



| Illustration | Mic |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Mic.png) | ![illustration for Mic](../../material-4/Av/Mic.Local.png) |




## Mic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Mic
include('material-4/Av/Mic')

' renders the element
Mic('Mic', 'Mic', 'an optional tech label')
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

' loads the Item which embeds the element Mic
include('material-4/Av/Mic')

' renders the element
Mic('Mic', 'Mic', 'an optional tech label')
@enduml
```

