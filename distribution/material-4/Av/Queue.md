# Queue


```text
material-4/Av/Queue
```

```text
include('material-4/Av/Queue')
```



| Illustration | Queue |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Queue.png) | ![illustration for Queue](../../material-4/Av/Queue.Local.png) |




## Queue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Queue
include('material-4/Av/Queue')

' renders the element
Queue('Queue', 'Queue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Queue
include('material-4/Av/Queue')

' renders the element
Queue('Queue', 'Queue', 'an optional tech label', 'an optional description')
@enduml
```

