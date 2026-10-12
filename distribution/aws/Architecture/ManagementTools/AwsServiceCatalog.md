# AwsServiceCatalog


```text
aws/Architecture/ManagementTools/AwsServiceCatalog
```

```text
include('aws/Architecture/ManagementTools/AwsServiceCatalog')
```



| Illustration | AwsServiceCatalog | AwsServiceCatalogCard | AwsServiceCatalogGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ManagementTools/AwsServiceCatalog.png) | ![illustration for AwsServiceCatalog](../../../aws/Architecture/ManagementTools/AwsServiceCatalog.Local.png) | ![illustration for AwsServiceCatalogCard](../../../aws/Architecture/ManagementTools/AwsServiceCatalogCard.Local.png) | ![illustration for AwsServiceCatalogGroup](../../../aws/Architecture/ManagementTools/AwsServiceCatalogGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsServiceCatalogXs>`
- `<$AwsServiceCatalogSm>`
- `<$AwsServiceCatalogMd>`
- `<$AwsServiceCatalogLg>`





## AwsServiceCatalog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsServiceCatalog
include('aws/Architecture/ManagementTools/AwsServiceCatalog')

' renders the element
AwsServiceCatalog('AwsServiceCatalog', 'Aws Service Catalog', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsServiceCatalog
include('aws/Architecture/ManagementTools/AwsServiceCatalog')

' renders the element
AwsServiceCatalog('AwsServiceCatalog', 'Aws Service Catalog', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsServiceCatalogCard
include('aws/Architecture/ManagementTools/AwsServiceCatalog')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsServiceCatalogCard
include('aws/Architecture/ManagementTools/AwsServiceCatalog')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsServiceCatalogGroup
include('aws/Architecture/ManagementTools/AwsServiceCatalog')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsServiceCatalogGroup
include('aws/Architecture/ManagementTools/AwsServiceCatalog')

' renders the element
AwsServiceCatalogGroup('AwsServiceCatalogGroup', 'Aws Service Catalog Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

