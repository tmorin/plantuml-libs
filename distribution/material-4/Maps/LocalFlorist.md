# LocalFlorist


```text
material-4/Maps/LocalFlorist
```

```text
include('material-4/Maps/LocalFlorist')
```



| Illustration | LocalFlorist |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalFlorist.png) | ![illustration for LocalFlorist](../../material-4/Maps/LocalFlorist.Local.png) |




## LocalFlorist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalFlorist
include('material-4/Maps/LocalFlorist')

' renders the element
LocalFlorist('LocalFlorist', 'Local Florist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalFlorist
include('material-4/Maps/LocalFlorist')

' renders the element
LocalFlorist('LocalFlorist', 'Local Florist', 'an optional tech label', 'an optional description')
@enduml
```

