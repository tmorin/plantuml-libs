# CloudStorage


```text
gcp/Item/CloudStorage
```

```text
include('gcp/Item/CloudStorage')
```



| Illustration | CloudStorage | CloudStorageCard | CloudStorageGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/CloudStorage.png) | ![illustration for CloudStorage](../../gcp/Item/CloudStorage.Local.png) | ![illustration for CloudStorageCard](../../gcp/Item/CloudStorageCard.Local.png) | ![illustration for CloudStorageGroup](../../gcp/Item/CloudStorageGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudStorageXs>`
- `<$CloudStorageSm>`
- `<$CloudStorageMd>`
- `<$CloudStorageLg>`





## CloudStorage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudStorage
include('gcp/Item/CloudStorage')

' renders the element
CloudStorage('CloudStorage', 'Cloud Storage', 'an optional tech label', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudStorage
include('gcp/Item/CloudStorage')

' renders the element
CloudStorage('CloudStorage', 'Cloud Storage', 'an optional tech label', 'an optional description')
@enduml
```

## CloudStorageCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudStorageCard
include('gcp/Item/CloudStorage')

' renders the element
CloudStorageCard('CloudStorageCard', 'Cloud Storage Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudStorageCard
include('gcp/Item/CloudStorage')

' renders the element
CloudStorageCard('CloudStorageCard', 'Cloud Storage Card', 'an optional description')
@enduml
```

## CloudStorageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudStorageGroup
include('gcp/Item/CloudStorage')

' renders the element
CloudStorageGroup('CloudStorageGroup', 'Cloud Storage Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudStorageGroup
include('gcp/Item/CloudStorage')

' renders the element
CloudStorageGroup('CloudStorageGroup', 'Cloud Storage Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

