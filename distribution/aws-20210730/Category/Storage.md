# Storage


```text
aws-20210730/Category/Storage
```

```text
include('aws-20210730/Category/Storage')
```



| Illustration | Storage | StorageCard | StorageGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210730/Category/Storage.png) | ![illustration for Storage](../../aws-20210730/Category/Storage.Local.png) | ![illustration for StorageCard](../../aws-20210730/Category/StorageCard.Local.png) | ![illustration for StorageGroup](../../aws-20210730/Category/StorageGroup.Local.png) |




## Storage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element Storage
include('aws-20210730/Category/Storage')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element Storage
include('aws-20210730/Category/Storage')

' renders the element
Storage('Storage', 'Storage', 'an optional tech label')
@enduml
```

## StorageCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element StorageCard
include('aws-20210730/Category/Storage')

' renders the element
StorageCard('StorageCard', 'Storage Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element StorageCard
include('aws-20210730/Category/Storage')

' renders the element
StorageCard('StorageCard', 'Storage Card', 'an optional description')
@enduml
```

## StorageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element StorageGroup
include('aws-20210730/Category/Storage')

' renders the element
StorageGroup('StorageGroup', 'Storage Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element StorageGroup
include('aws-20210730/Category/Storage')

' renders the element
StorageGroup('StorageGroup', 'Storage Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

