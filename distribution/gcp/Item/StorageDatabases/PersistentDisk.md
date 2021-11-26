# PersistentDisk


```text
gcp/Item/StorageDatabases/PersistentDisk
```

```text
include('gcp/Item/StorageDatabases/PersistentDisk')
```



| Illustration | PersistentDisk | PersistentDiskCard | PersistentDiskGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/StorageDatabases/PersistentDisk.png) | ![illustration for PersistentDisk](../../../gcp/Item/StorageDatabases/PersistentDisk.Local.png) | ![illustration for PersistentDiskCard](../../../gcp/Item/StorageDatabases/PersistentDiskCard.Local.png) | ![illustration for PersistentDiskGroup](../../../gcp/Item/StorageDatabases/PersistentDiskGroup.Local.png) |




## PersistentDisk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PersistentDisk
include('gcp/Item/StorageDatabases/PersistentDisk')

' renders the element
PersistentDisk('PersistentDisk', 'Persistent Disk', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PersistentDisk
include('gcp/Item/StorageDatabases/PersistentDisk')

' renders the element
PersistentDisk('PersistentDisk', 'Persistent Disk', 'an optional tech label')
@enduml
```

## PersistentDiskCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PersistentDiskCard
include('gcp/Item/StorageDatabases/PersistentDisk')

' renders the element
PersistentDiskCard('PersistentDiskCard', 'Persistent Disk Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PersistentDiskCard
include('gcp/Item/StorageDatabases/PersistentDisk')

' renders the element
PersistentDiskCard('PersistentDiskCard', 'Persistent Disk Card', 'an optional description')
@enduml
```

## PersistentDiskGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PersistentDiskGroup
include('gcp/Item/StorageDatabases/PersistentDisk')

' renders the element
PersistentDiskGroup('PersistentDiskGroup', 'Persistent Disk Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PersistentDiskGroup
include('gcp/Item/StorageDatabases/PersistentDisk')

' renders the element
PersistentDiskGroup('PersistentDiskGroup', 'Persistent Disk Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

