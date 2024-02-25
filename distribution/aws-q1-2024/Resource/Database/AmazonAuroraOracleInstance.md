# AmazonAuroraOracleInstance


```text
aws-q1-2024/Resource/Database/AmazonAuroraOracleInstance
```

```text
include('aws-q1-2024/Resource/Database/AmazonAuroraOracleInstance')
```



| Illustration | AmazonAuroraOracleInstance | AmazonAuroraOracleInstanceCard | AmazonAuroraOracleInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Resource/Database/AmazonAuroraOracleInstance.png) | ![illustration for AmazonAuroraOracleInstance](../../../aws-q1-2024/Resource/Database/AmazonAuroraOracleInstance.Local.png) | ![illustration for AmazonAuroraOracleInstanceCard](../../../aws-q1-2024/Resource/Database/AmazonAuroraOracleInstanceCard.Local.png) | ![illustration for AmazonAuroraOracleInstanceGroup](../../../aws-q1-2024/Resource/Database/AmazonAuroraOracleInstanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonAuroraOracleInstanceXs>`
- `<$AmazonAuroraOracleInstanceSm>`
- `<$AmazonAuroraOracleInstanceMd>`
- `<$AmazonAuroraOracleInstanceLg>`





## AmazonAuroraOracleInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstance
include('aws-q1-2024/Resource/Database/AmazonAuroraOracleInstance')

' renders the element
AmazonAuroraOracleInstance('AmazonAuroraOracleInstance', 'Amazon Aurora Oracle Instance', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstance
include('aws-q1-2024/Resource/Database/AmazonAuroraOracleInstance')

' renders the element
AmazonAuroraOracleInstance('AmazonAuroraOracleInstance', 'Amazon Aurora Oracle Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonAuroraOracleInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstanceCard
include('aws-q1-2024/Resource/Database/AmazonAuroraOracleInstance')

' renders the element
AmazonAuroraOracleInstanceCard('AmazonAuroraOracleInstanceCard', 'Amazon Aurora Oracle Instance Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstanceCard
include('aws-q1-2024/Resource/Database/AmazonAuroraOracleInstance')

' renders the element
AmazonAuroraOracleInstanceCard('AmazonAuroraOracleInstanceCard', 'Amazon Aurora Oracle Instance Card', 'an optional description')
@enduml
```

## AmazonAuroraOracleInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstanceGroup
include('aws-q1-2024/Resource/Database/AmazonAuroraOracleInstance')

' renders the element
AmazonAuroraOracleInstanceGroup('AmazonAuroraOracleInstanceGroup', 'Amazon Aurora Oracle Instance Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstanceGroup
include('aws-q1-2024/Resource/Database/AmazonAuroraOracleInstance')

' renders the element
AmazonAuroraOracleInstanceGroup('AmazonAuroraOracleInstanceGroup', 'Amazon Aurora Oracle Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

