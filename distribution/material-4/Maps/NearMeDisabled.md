# NearMeDisabled


```text
material-4/Maps/NearMeDisabled
```

```text
include('material-4/Maps/NearMeDisabled')
```



| Illustration | NearMeDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/NearMeDisabled.png) | ![illustration for NearMeDisabled](../../material-4/Maps/NearMeDisabled.Local.png) |




## NearMeDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NearMeDisabled
include('material-4/Maps/NearMeDisabled')

' renders the element
NearMeDisabled('NearMeDisabled', 'Near Me Disabled', 'an optional tech label')
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

' loads the Item which embeds the element NearMeDisabled
include('material-4/Maps/NearMeDisabled')

' renders the element
NearMeDisabled('NearMeDisabled', 'Near Me Disabled', 'an optional tech label')
@enduml
```

