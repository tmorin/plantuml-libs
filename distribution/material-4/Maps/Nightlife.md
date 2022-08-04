# Nightlife


```text
material-4/Maps/Nightlife
```

```text
include('material-4/Maps/Nightlife')
```



| Illustration | Nightlife |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Nightlife.png) | ![illustration for Nightlife](../../material-4/Maps/Nightlife.Local.png) |




## Nightlife

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Nightlife
include('material-4/Maps/Nightlife')

' renders the element
Nightlife('Nightlife', 'Nightlife', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nightlife
include('material-4/Maps/Nightlife')

' renders the element
Nightlife('Nightlife', 'Nightlife', 'an optional tech label', 'an optional description')
@enduml
```

