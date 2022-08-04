# Hd


```text
material-4/Av/Hd
```

```text
include('material-4/Av/Hd')
```



| Illustration | Hd |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Hd.png) | ![illustration for Hd](../../material-4/Av/Hd.Local.png) |




## Hd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Hd
include('material-4/Av/Hd')

' renders the element
Hd('Hd', 'Hd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hd
include('material-4/Av/Hd')

' renders the element
Hd('Hd', 'Hd', 'an optional tech label', 'an optional description')
@enduml
```

