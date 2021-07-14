# Handyman


```text
material-4/Maps/Handyman
```

```text
include('material-4/Maps/Handyman')
```



| Illustration | Handyman |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Handyman.png) | ![illustration for Handyman](../../material-4/Maps/Handyman.Local.png) |




## Handyman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Handyman
include('material-4/Maps/Handyman')

' renders the element
Handyman('Handyman', 'Handyman', 'an optional tech label')
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

' loads the Item which embeds the element Handyman
include('material-4/Maps/Handyman')

' renders the element
Handyman('Handyman', 'Handyman', 'an optional tech label')
@enduml
```

