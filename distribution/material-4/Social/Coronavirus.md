# Coronavirus


```text
material-4/Social/Coronavirus
```

```text
include('material-4/Social/Coronavirus')
```



| Illustration | Coronavirus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Coronavirus.png) | ![illustration for Coronavirus](../../material-4/Social/Coronavirus.Local.png) |




## Coronavirus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Coronavirus
include('material-4/Social/Coronavirus')

' renders the element
Coronavirus('Coronavirus', 'Coronavirus', 'an optional tech label')
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

' loads the Item which embeds the element Coronavirus
include('material-4/Social/Coronavirus')

' renders the element
Coronavirus('Coronavirus', 'Coronavirus', 'an optional tech label')
@enduml
```

