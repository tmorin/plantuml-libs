# CloudQueue


```text
material/File/CloudQueue
```

```text
include('material/File/CloudQueue')
```



| Illustration | CloudQueue |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/CloudQueue.png) | ![illustration for CloudQueue](../../material/File/CloudQueue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudQueueXs>`
- `<$CloudQueueSm>`
- `<$CloudQueueMd>`
- `<$CloudQueueLg>`





## CloudQueue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CloudQueue
include('material/File/CloudQueue')

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
include('material/bootstrap')

' loads the Item which embeds the element CloudQueue
include('material/File/CloudQueue')

' renders the element
CloudQueue('CloudQueue', 'Cloud Queue', 'an optional tech label', 'an optional description')
@enduml
```

