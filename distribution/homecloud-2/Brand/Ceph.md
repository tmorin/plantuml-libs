# Ceph


```text
homecloud-2/Brand/Ceph
```

```text
include('homecloud-2/Brand/Ceph')
```



| Illustration | Ceph | CephCard | CephGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../homecloud-2/Brand/Ceph.png) | ![illustration for Ceph](../../homecloud-2/Brand/Ceph.Local.png) | ![illustration for CephCard](../../homecloud-2/Brand/CephCard.Local.png) | ![illustration for CephGroup](../../homecloud-2/Brand/CephGroup.Local.png) |




## Ceph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element Ceph
include('homecloud-2/Brand/Ceph')

' renders the element
Ceph('Ceph', 'Ceph', 'an optional tech label', 'an optional description')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element Ceph
include('homecloud-2/Brand/Ceph')

' renders the element
Ceph('Ceph', 'Ceph', 'an optional tech label', 'an optional description')
@enduml
```

## CephCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element CephCard
include('homecloud-2/Brand/Ceph')

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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element CephCard
include('homecloud-2/Brand/Ceph')

' renders the element
CephCard('CephCard', 'Ceph Card', 'an optional description')
@enduml
```

## CephGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element CephGroup
include('homecloud-2/Brand/Ceph')

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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element CephGroup
include('homecloud-2/Brand/Ceph')

' renders the element
CephGroup('CephGroup', 'Ceph Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

