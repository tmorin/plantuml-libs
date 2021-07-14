# AddToQueue


```text
material-4/Av/AddToQueue
```

```text
include('material-4/Av/AddToQueue')
```



| Illustration | AddToQueue |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/AddToQueue.png) | ![illustration for AddToQueue](../../material-4/Av/AddToQueue.Local.png) |




## AddToQueue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddToQueue
include('material-4/Av/AddToQueue')

' renders the element
AddToQueue('AddToQueue', 'Add To Queue', 'an optional tech label')
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

' loads the Item which embeds the element AddToQueue
include('material-4/Av/AddToQueue')

' renders the element
AddToQueue('AddToQueue', 'Add To Queue', 'an optional tech label')
@enduml
```

