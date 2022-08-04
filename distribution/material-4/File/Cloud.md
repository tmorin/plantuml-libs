# Cloud


```text
material-4/File/Cloud
```

```text
include('material-4/File/Cloud')
```



| Illustration | Cloud |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/Cloud.png) | ![illustration for Cloud](../../material-4/File/Cloud.Local.png) |




## Cloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Cloud
include('material-4/File/Cloud')

' renders the element
Cloud('Cloud', 'Cloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloud
include('material-4/File/Cloud')

' renders the element
Cloud('Cloud', 'Cloud', 'an optional tech label', 'an optional description')
@enduml
```

