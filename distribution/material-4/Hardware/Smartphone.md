# Smartphone


```text
material-4/Hardware/Smartphone
```

```text
include('material-4/Hardware/Smartphone')
```



| Illustration | Smartphone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Smartphone.png) | ![illustration for Smartphone](../../material-4/Hardware/Smartphone.Local.png) |




## Smartphone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Smartphone
include('material-4/Hardware/Smartphone')

' renders the element
Smartphone('Smartphone', 'Smartphone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Smartphone
include('material-4/Hardware/Smartphone')

' renders the element
Smartphone('Smartphone', 'Smartphone', 'an optional tech label', 'an optional description')
@enduml
```

