# AwsResourceExplorer


```text
aws/Architecture/ManagementTools/AwsResourceExplorer
```

```text
include('aws/Architecture/ManagementTools/AwsResourceExplorer')
```



| Illustration | AwsResourceExplorer | AwsResourceExplorerCard | AwsResourceExplorerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ManagementTools/AwsResourceExplorer.png) | ![illustration for AwsResourceExplorer](../../../aws/Architecture/ManagementTools/AwsResourceExplorer.Local.png) | ![illustration for AwsResourceExplorerCard](../../../aws/Architecture/ManagementTools/AwsResourceExplorerCard.Local.png) | ![illustration for AwsResourceExplorerGroup](../../../aws/Architecture/ManagementTools/AwsResourceExplorerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsResourceExplorerXs>`
- `<$AwsResourceExplorerSm>`
- `<$AwsResourceExplorerMd>`
- `<$AwsResourceExplorerLg>`





## AwsResourceExplorer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsResourceExplorer
include('aws/Architecture/ManagementTools/AwsResourceExplorer')

' renders the element
AwsResourceExplorer('AwsResourceExplorer', 'Aws Resource Explorer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsResourceExplorer
include('aws/Architecture/ManagementTools/AwsResourceExplorer')

' renders the element
AwsResourceExplorer('AwsResourceExplorer', 'Aws Resource Explorer', 'an optional tech label', 'an optional description')
@enduml
```

## AwsResourceExplorerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsResourceExplorerCard
include('aws/Architecture/ManagementTools/AwsResourceExplorer')

' renders the element
AwsResourceExplorerCard('AwsResourceExplorerCard', 'Aws Resource Explorer Card', 'an optional description')
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

' loads the Item which embeds the element AwsResourceExplorerCard
include('aws/Architecture/ManagementTools/AwsResourceExplorer')

' renders the element
AwsResourceExplorerCard('AwsResourceExplorerCard', 'Aws Resource Explorer Card', 'an optional description')
@enduml
```

## AwsResourceExplorerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsResourceExplorerGroup
include('aws/Architecture/ManagementTools/AwsResourceExplorer')

' renders the element
AwsResourceExplorerGroup('AwsResourceExplorerGroup', 'Aws Resource Explorer Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsResourceExplorerGroup
include('aws/Architecture/ManagementTools/AwsResourceExplorer')

' renders the element
AwsResourceExplorerGroup('AwsResourceExplorerGroup', 'Aws Resource Explorer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

