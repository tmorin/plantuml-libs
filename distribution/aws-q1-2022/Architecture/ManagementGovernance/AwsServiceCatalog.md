# AwsServiceCatalog


```text
aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalog
```

```text
include('aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalog')
```



| Illustration | AwsServiceCatalog | AwsServiceCatalogCard | AwsServiceCatalogGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalog.png) | ![illustration for AwsServiceCatalog](../../../aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalog.Local.png) | ![illustration for AwsServiceCatalogCard](../../../aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalogCard.Local.png) | ![illustration for AwsServiceCatalogGroup](../../../aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalogGroup.Local.png) |




## AwsServiceCatalog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsServiceCatalog
include('aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalog')

' renders the element
AwsServiceCatalog('AwsServiceCatalog', 'Aws Service Catalog', 'an optional tech label')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsServiceCatalog
include('aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalog')

' renders the element
AwsServiceCatalog('AwsServiceCatalog', 'Aws Service Catalog', 'an optional tech label')
@enduml
```

## AwsServiceCatalogCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsServiceCatalogCard
include('aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalog')

' renders the element
AwsServiceCatalogCard('AwsServiceCatalogCard', 'Aws Service Catalog Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsServiceCatalogCard
include('aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalog')

' renders the element
AwsServiceCatalogCard('AwsServiceCatalogCard', 'Aws Service Catalog Card', 'an optional description')
@enduml
```

## AwsServiceCatalogGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsServiceCatalogGroup
include('aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalog')

' renders the element
AwsServiceCatalogGroup('AwsServiceCatalogGroup', 'Aws Service Catalog Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsServiceCatalogGroup
include('aws-q1-2022/Architecture/ManagementGovernance/AwsServiceCatalog')

' renders the element
AwsServiceCatalogGroup('AwsServiceCatalogGroup', 'Aws Service Catalog Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

