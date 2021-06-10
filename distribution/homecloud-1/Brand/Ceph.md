# Ceph


```text
homecloud-1/Brand/Ceph
```

```text
include('homecloud-1/Brand/Ceph')
```



| Illustration | Ceph | CephCard | CephGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../homecloud-1/Brand/Ceph.png) | ![illustration for Ceph](../../homecloud-1/Brand/Ceph.Local.png) | ![illustration for CephCard](../../homecloud-1/Brand/CephCard.Local.png) | ![illustration for CephGroup](../../homecloud-1/Brand/CephGroup.Local.png) |




## Ceph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element Ceph
include('homecloud-1/Brand/Ceph')

' renders the element
Ceph('Ceph', 'Ceph', 'an optional tech label')
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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element Ceph
include('homecloud-1/Brand/Ceph')

' renders the element
Ceph('Ceph', 'Ceph', 'an optional tech label')
@enduml
```

## CephCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element CephCard
include('homecloud-1/Brand/Ceph')

' renders the element
CephCard('CephCard', 'Ceph Card', 'an optional description')
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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element CephCard
include('homecloud-1/Brand/Ceph')

' renders the element
CephCard('CephCard', 'Ceph Card', 'an optional description')
@enduml
```

## CephGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element CephGroup
include('homecloud-1/Brand/Ceph')

' renders the element
CephGroup('CephGroup', 'Ceph Group', 'an optional tech label') {
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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element CephGroup
include('homecloud-1/Brand/Ceph')

' renders the element
CephGroup('CephGroup', 'Ceph Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

