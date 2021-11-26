# Bathtub


```text
material-4/Places/Bathtub
```

```text
include('material-4/Places/Bathtub')
```



| Illustration | Bathtub |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Bathtub.png) | ![illustration for Bathtub](../../material-4/Places/Bathtub.Local.png) |




## Bathtub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Bathtub
include('material-4/Places/Bathtub')

' renders the element
Bathtub('Bathtub', 'Bathtub', 'an optional tech label')
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

' loads the Item which embeds the element Bathtub
include('material-4/Places/Bathtub')

' renders the element
Bathtub('Bathtub', 'Bathtub', 'an optional tech label')
@enduml
```

