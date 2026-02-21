# AddToQueue


```text
material/Av/AddToQueue
```

```text
include('material/Av/AddToQueue')
```



| Illustration | AddToQueue |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/AddToQueue.png) | ![illustration for AddToQueue](../../material/Av/AddToQueue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddToQueueXs>`
- `<$AddToQueueSm>`
- `<$AddToQueueMd>`
- `<$AddToQueueLg>`





## AddToQueue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AddToQueue
include('material/Av/AddToQueue')

' renders the element
AddToQueue('AddToQueue', 'Add To Queue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddToQueue
include('material/Av/AddToQueue')

' renders the element
AddToQueue('AddToQueue', 'Add To Queue', 'an optional tech label', 'an optional description')
@enduml
```

