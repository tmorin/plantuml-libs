# Dry


```text
material-4/Places/Dry
```

```text
include('material-4/Places/Dry')
```



| Illustration | Dry |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Dry.png) | ![illustration for Dry](../../material-4/Places/Dry.Local.png) |




## Dry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Dry
include('material-4/Places/Dry')

' renders the element
Dry('Dry', 'Dry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dry
include('material-4/Places/Dry')

' renders the element
Dry('Dry', 'Dry', 'an optional tech label', 'an optional description')
@enduml
```

