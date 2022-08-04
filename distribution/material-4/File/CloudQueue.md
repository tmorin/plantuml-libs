# CloudQueue


```text
material-4/File/CloudQueue
```

```text
include('material-4/File/CloudQueue')
```



| Illustration | CloudQueue |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/CloudQueue.png) | ![illustration for CloudQueue](../../material-4/File/CloudQueue.Local.png) |




## CloudQueue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CloudQueue
include('material-4/File/CloudQueue')

' renders the element
CloudQueue('CloudQueue', 'Cloud Queue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudQueue
include('material-4/File/CloudQueue')

' renders the element
CloudQueue('CloudQueue', 'Cloud Queue', 'an optional tech label', 'an optional description')
@enduml
```

