# RemoveFromQueue


```text
material/Av/RemoveFromQueue
```

```text
include('material/Av/RemoveFromQueue')
```



| Illustration | RemoveFromQueue |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/RemoveFromQueue.png) | ![illustration for RemoveFromQueue](../../material/Av/RemoveFromQueue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemoveFromQueueXs>`
- `<$RemoveFromQueueSm>`
- `<$RemoveFromQueueMd>`
- `<$RemoveFromQueueLg>`





## RemoveFromQueue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RemoveFromQueue
include('material/Av/RemoveFromQueue')

' renders the element
RemoveFromQueue('RemoveFromQueue', 'Remove From Queue', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element RemoveFromQueue
include('material/Av/RemoveFromQueue')

' renders the element
RemoveFromQueue('RemoveFromQueue', 'Remove From Queue', 'an optional tech label', 'an optional description')
@enduml
```

