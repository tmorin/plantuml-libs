# Tune


```text
material-4/Image/Tune
```

```text
include('material-4/Image/Tune')
```



| Illustration | Tune |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Tune.png) | ![illustration for Tune](../../material-4/Image/Tune.Local.png) |




## Tune

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Tune
include('material-4/Image/Tune')

' renders the element
Tune('Tune', 'Tune', 'an optional tech label')
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

' loads the Item which embeds the element Tune
include('material-4/Image/Tune')

' renders the element
Tune('Tune', 'Tune', 'an optional tech label')
@enduml
```

