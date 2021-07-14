# RemoveFromQueue


```text
material-4/Av/RemoveFromQueue
```

```text
include('material-4/Av/RemoveFromQueue')
```



| Illustration | RemoveFromQueue |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/RemoveFromQueue.png) | ![illustration for RemoveFromQueue](../../material-4/Av/RemoveFromQueue.Local.png) |




## RemoveFromQueue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RemoveFromQueue
include('material-4/Av/RemoveFromQueue')

' renders the element
RemoveFromQueue('RemoveFromQueue', 'Remove From Queue', 'an optional tech label')
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

' loads the Item which embeds the element RemoveFromQueue
include('material-4/Av/RemoveFromQueue')

' renders the element
RemoveFromQueue('RemoveFromQueue', 'Remove From Queue', 'an optional tech label')
@enduml
```

