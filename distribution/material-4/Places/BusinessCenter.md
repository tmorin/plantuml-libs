# BusinessCenter


```text
material-4/Places/BusinessCenter
```

```text
include('material-4/Places/BusinessCenter')
```



| Illustration | BusinessCenter |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/BusinessCenter.png) | ![illustration for BusinessCenter](../../material-4/Places/BusinessCenter.Local.png) |




## BusinessCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BusinessCenter
include('material-4/Places/BusinessCenter')

' renders the element
BusinessCenter('BusinessCenter', 'Business Center', 'an optional tech label')
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

' loads the Item which embeds the element BusinessCenter
include('material-4/Places/BusinessCenter')

' renders the element
BusinessCenter('BusinessCenter', 'Business Center', 'an optional tech label')
@enduml
```

