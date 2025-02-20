# AmazonAuroraPiopsInstance


```text
aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstance
```

```text
include('aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstance')
```



| Illustration | AmazonAuroraPiopsInstance | AmazonAuroraPiopsInstanceCard | AmazonAuroraPiopsInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstance.png) | ![illustration for AmazonAuroraPiopsInstance](../../../aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstance.Local.png) | ![illustration for AmazonAuroraPiopsInstanceCard](../../../aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstanceCard.Local.png) | ![illustration for AmazonAuroraPiopsInstanceGroup](../../../aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonAuroraPiopsInstanceXs>`
- `<$AmazonAuroraPiopsInstanceSm>`
- `<$AmazonAuroraPiopsInstanceMd>`
- `<$AmazonAuroraPiopsInstanceLg>`





## AmazonAuroraPiopsInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonAuroraPiopsInstance
include('aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstance')

' renders the element
AmazonAuroraPiopsInstance('AmazonAuroraPiopsInstance', 'Amazon Aurora Piops Instance', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonAuroraPiopsInstance
include('aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstance')

' renders the element
AmazonAuroraPiopsInstance('AmazonAuroraPiopsInstance', 'Amazon Aurora Piops Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonAuroraPiopsInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonAuroraPiopsInstanceCard
include('aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstance')

' renders the element
AmazonAuroraPiopsInstanceCard('AmazonAuroraPiopsInstanceCard', 'Amazon Aurora Piops Instance Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonAuroraPiopsInstanceCard
include('aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstance')

' renders the element
AmazonAuroraPiopsInstanceCard('AmazonAuroraPiopsInstanceCard', 'Amazon Aurora Piops Instance Card', 'an optional description')
@enduml
```

## AmazonAuroraPiopsInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonAuroraPiopsInstanceGroup
include('aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstance')

' renders the element
AmazonAuroraPiopsInstanceGroup('AmazonAuroraPiopsInstanceGroup', 'Amazon Aurora Piops Instance Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonAuroraPiopsInstanceGroup
include('aws-q1-2025/Resource/Database/AmazonAuroraPiopsInstance')

' renders the element
AmazonAuroraPiopsInstanceGroup('AmazonAuroraPiopsInstanceGroup', 'Amazon Aurora Piops Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

