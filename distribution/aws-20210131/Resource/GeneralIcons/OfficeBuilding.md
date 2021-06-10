# OfficeBuilding


```text
aws-20210131/Resource/GeneralIcons/OfficeBuilding
```

```text
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')
```



| Illustration | OfficeBuilding | OfficeBuildingCard | OfficeBuildingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/GeneralIcons/OfficeBuilding.png) | ![illustration for OfficeBuilding](../../../aws-20210131/Resource/GeneralIcons/OfficeBuilding.Local.png) | ![illustration for OfficeBuildingCard](../../../aws-20210131/Resource/GeneralIcons/OfficeBuildingCard.Local.png) | ![illustration for OfficeBuildingGroup](../../../aws-20210131/Resource/GeneralIcons/OfficeBuildingGroup.Local.png) |




## OfficeBuilding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element OfficeBuilding
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')

' renders the element
OfficeBuilding('OfficeBuilding', 'Office Building', 'an optional tech label')
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

' loads the Item which embeds the element OfficeBuilding
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')

' renders the element
OfficeBuilding('OfficeBuilding', 'Office Building', 'an optional tech label')
@enduml
```

## OfficeBuildingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element OfficeBuildingCard
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')

' renders the element
OfficeBuildingCard('OfficeBuildingCard', 'Office Building Card', 'an optional description')
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

' loads the Item which embeds the element OfficeBuildingCard
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')

' renders the element
OfficeBuildingCard('OfficeBuildingCard', 'Office Building Card', 'an optional description')
@enduml
```

## OfficeBuildingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element OfficeBuildingGroup
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')

' renders the element
OfficeBuildingGroup('OfficeBuildingGroup', 'Office Building Group', 'an optional tech label') {
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

' loads the Item which embeds the element OfficeBuildingGroup
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')

' renders the element
OfficeBuildingGroup('OfficeBuildingGroup', 'Office Building Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

