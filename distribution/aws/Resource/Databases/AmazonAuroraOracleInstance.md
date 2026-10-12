# AmazonAuroraOracleInstance


```text
aws/Resource/Databases/AmazonAuroraOracleInstance
```

```text
include('aws/Resource/Databases/AmazonAuroraOracleInstance')
```



| Illustration | AmazonAuroraOracleInstance | AmazonAuroraOracleInstanceCard | AmazonAuroraOracleInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/Databases/AmazonAuroraOracleInstance.png) | ![illustration for AmazonAuroraOracleInstance](../../../aws/Resource/Databases/AmazonAuroraOracleInstance.Local.png) | ![illustration for AmazonAuroraOracleInstanceCard](../../../aws/Resource/Databases/AmazonAuroraOracleInstanceCard.Local.png) | ![illustration for AmazonAuroraOracleInstanceGroup](../../../aws/Resource/Databases/AmazonAuroraOracleInstanceGroup.Local.png) |



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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstance
include('aws/Resource/Databases/AmazonAuroraOracleInstance')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstance
include('aws/Resource/Databases/AmazonAuroraOracleInstance')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstanceCard
include('aws/Resource/Databases/AmazonAuroraOracleInstance')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstanceCard
include('aws/Resource/Databases/AmazonAuroraOracleInstance')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstanceGroup
include('aws/Resource/Databases/AmazonAuroraOracleInstance')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAuroraOracleInstanceGroup
include('aws/Resource/Databases/AmazonAuroraOracleInstance')

' renders the element
AmazonAuroraOracleInstanceGroup('AmazonAuroraOracleInstanceGroup', 'Amazon Aurora Oracle Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

