# Carpenter


```text
material-4/Places/Carpenter
```

```text
include('material-4/Places/Carpenter')
```



| Illustration | Carpenter |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Carpenter.png) | ![illustration for Carpenter](../../material-4/Places/Carpenter.Local.png) |




## Carpenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Carpenter
include('material-4/Places/Carpenter')

' renders the element
Carpenter('Carpenter', 'Carpenter', 'an optional tech label')
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

' loads the Item which embeds the element Carpenter
include('material-4/Places/Carpenter')

' renders the element
Carpenter('Carpenter', 'Carpenter', 'an optional tech label')
@enduml
```

