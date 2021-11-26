# Rtt


```text
material-4/Communication/Rtt
```

```text
include('material-4/Communication/Rtt')
```



| Illustration | Rtt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/Rtt.png) | ![illustration for Rtt](../../material-4/Communication/Rtt.Local.png) |




## Rtt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Rtt
include('material-4/Communication/Rtt')

' renders the element
Rtt('Rtt', 'Rtt', 'an optional tech label')
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

' loads the Item which embeds the element Rtt
include('material-4/Communication/Rtt')

' renders the element
Rtt('Rtt', 'Rtt', 'an optional tech label')
@enduml
```

