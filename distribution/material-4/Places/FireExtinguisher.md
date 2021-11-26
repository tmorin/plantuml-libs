# FireExtinguisher


```text
material-4/Places/FireExtinguisher
```

```text
include('material-4/Places/FireExtinguisher')
```



| Illustration | FireExtinguisher |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/FireExtinguisher.png) | ![illustration for FireExtinguisher](../../material-4/Places/FireExtinguisher.Local.png) |




## FireExtinguisher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FireExtinguisher
include('material-4/Places/FireExtinguisher')

' renders the element
FireExtinguisher('FireExtinguisher', 'Fire Extinguisher', 'an optional tech label')
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

' loads the Item which embeds the element FireExtinguisher
include('material-4/Places/FireExtinguisher')

' renders the element
FireExtinguisher('FireExtinguisher', 'Fire Extinguisher', 'an optional tech label')
@enduml
```

