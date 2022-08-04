# Roofing


```text
material-4/Places/Roofing
```

```text
include('material-4/Places/Roofing')
```



| Illustration | Roofing |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Roofing.png) | ![illustration for Roofing](../../material-4/Places/Roofing.Local.png) |




## Roofing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Roofing
include('material-4/Places/Roofing')

' renders the element
Roofing('Roofing', 'Roofing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Roofing
include('material-4/Places/Roofing')

' renders the element
Roofing('Roofing', 'Roofing', 'an optional tech label', 'an optional description')
@enduml
```

