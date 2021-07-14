# Storage


```text
material-4/Device/Storage
```

```text
include('material-4/Device/Storage')
```



| Illustration | Storage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/Storage.png) | ![illustration for Storage](../../material-4/Device/Storage.Local.png) |




## Storage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Storage
include('material-4/Device/Storage')

' renders the element
Storage('Storage', 'Storage', 'an optional tech label')
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

' loads the Item which embeds the element Storage
include('material-4/Device/Storage')

' renders the element
Storage('Storage', 'Storage', 'an optional tech label')
@enduml
```

