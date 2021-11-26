# Security


```text
material-4/Hardware/Security
```

```text
include('material-4/Hardware/Security')
```



| Illustration | Security |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Security.png) | ![illustration for Security](../../material-4/Hardware/Security.Local.png) |




## Security

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Security
include('material-4/Hardware/Security')

' renders the element
Security('Security', 'Security', 'an optional tech label')
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

' loads the Item which embeds the element Security
include('material-4/Hardware/Security')

' renders the element
Security('Security', 'Security', 'an optional tech label')
@enduml
```

