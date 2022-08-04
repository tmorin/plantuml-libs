# Hvac


```text
material-4/Maps/Hvac
```

```text
include('material-4/Maps/Hvac')
```



| Illustration | Hvac |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Hvac.png) | ![illustration for Hvac](../../material-4/Maps/Hvac.Local.png) |




## Hvac

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Hvac
include('material-4/Maps/Hvac')

' renders the element
Hvac('Hvac', 'Hvac', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hvac
include('material-4/Maps/Hvac')

' renders the element
Hvac('Hvac', 'Hvac', 'an optional tech label', 'an optional description')
@enduml
```

