# AwsCostExplorer


```text
aws-20210730/Architecture/AwsCostManagement/AwsCostExplorer
```

```text
include('aws-20210730/Architecture/AwsCostManagement/AwsCostExplorer')
```



| Illustration | AwsCostExplorer | AwsCostExplorerCard | AwsCostExplorerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/AwsCostManagement/AwsCostExplorer.png) | ![illustration for AwsCostExplorer](../../../aws-20210730/Architecture/AwsCostManagement/AwsCostExplorer.Local.png) | ![illustration for AwsCostExplorerCard](../../../aws-20210730/Architecture/AwsCostManagement/AwsCostExplorerCard.Local.png) | ![illustration for AwsCostExplorerGroup](../../../aws-20210730/Architecture/AwsCostManagement/AwsCostExplorerGroup.Local.png) |




## AwsCostExplorer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCostExplorer
include('aws-20210730/Architecture/AwsCostManagement/AwsCostExplorer')

' renders the element
AwsCostExplorer('AwsCostExplorer', 'Aws Cost Explorer', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCostExplorer
include('aws-20210730/Architecture/AwsCostManagement/AwsCostExplorer')

' renders the element
AwsCostExplorer('AwsCostExplorer', 'Aws Cost Explorer', 'an optional tech label')
@enduml
```

## AwsCostExplorerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCostExplorerCard
include('aws-20210730/Architecture/AwsCostManagement/AwsCostExplorer')

' renders the element
AwsCostExplorerCard('AwsCostExplorerCard', 'Aws Cost Explorer Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCostExplorerCard
include('aws-20210730/Architecture/AwsCostManagement/AwsCostExplorer')

' renders the element
AwsCostExplorerCard('AwsCostExplorerCard', 'Aws Cost Explorer Card', 'an optional description')
@enduml
```

## AwsCostExplorerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCostExplorerGroup
include('aws-20210730/Architecture/AwsCostManagement/AwsCostExplorer')

' renders the element
AwsCostExplorerGroup('AwsCostExplorerGroup', 'Aws Cost Explorer Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCostExplorerGroup
include('aws-20210730/Architecture/AwsCostManagement/AwsCostExplorer')

' renders the element
AwsCostExplorerGroup('AwsCostExplorerGroup', 'Aws Cost Explorer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

