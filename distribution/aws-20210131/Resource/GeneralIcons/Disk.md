# Disk


```text
aws-20210131/Resource/GeneralIcons/Disk
```

```text
include('aws-20210131/Resource/GeneralIcons/Disk')
```



| Illustration | Disk | DiskCard | DiskGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/GeneralIcons/Disk.png) | ![illustration for Disk](../../../aws-20210131/Resource/GeneralIcons/Disk.Local.png) | ![illustration for DiskCard](../../../aws-20210131/Resource/GeneralIcons/DiskCard.Local.png) | ![illustration for DiskGroup](../../../aws-20210131/Resource/GeneralIcons/DiskGroup.Local.png) |




## Disk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Disk
include('aws-20210131/Resource/GeneralIcons/Disk')

' renders the element
Disk('Disk', 'Disk', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Disk
include('aws-20210131/Resource/GeneralIcons/Disk')

' renders the element
Disk('Disk', 'Disk', 'an optional tech label')
@enduml
```

## DiskCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element DiskCard
include('aws-20210131/Resource/GeneralIcons/Disk')

' renders the element
DiskCard('DiskCard', 'Disk Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element DiskCard
include('aws-20210131/Resource/GeneralIcons/Disk')

' renders the element
DiskCard('DiskCard', 'Disk Card', 'an optional description')
@enduml
```

## DiskGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element DiskGroup
include('aws-20210131/Resource/GeneralIcons/Disk')

' renders the element
DiskGroup('DiskGroup', 'Disk Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element DiskGroup
include('aws-20210131/Resource/GeneralIcons/Disk')

' renders the element
DiskGroup('DiskGroup', 'Disk Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

