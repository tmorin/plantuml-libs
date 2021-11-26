# Dns


```text
material-4/Action/Dns
```

```text
include('material-4/Action/Dns')
```



| Illustration | Dns |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Dns.png) | ![illustration for Dns](../../material-4/Action/Dns.Local.png) |




## Dns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Dns
include('material-4/Action/Dns')

' renders the element
Dns('Dns', 'Dns', 'an optional tech label')
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

' loads the Item which embeds the element Dns
include('material-4/Action/Dns')

' renders the element
Dns('Dns', 'Dns', 'an optional tech label')
@enduml
```

