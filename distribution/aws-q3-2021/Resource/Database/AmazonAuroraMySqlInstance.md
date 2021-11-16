# AmazonAuroraMySqlInstance


```text
aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstance
```

```text
include('aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstance')
```



| Illustration | AmazonAuroraMySqlInstance | AmazonAuroraMySqlInstanceCard | AmazonAuroraMySqlInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstance.png) | ![illustration for AmazonAuroraMySqlInstance](../../../aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstance.Local.png) | ![illustration for AmazonAuroraMySqlInstanceCard](../../../aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstanceCard.Local.png) | ![illustration for AmazonAuroraMySqlInstanceGroup](../../../aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstanceGroup.Local.png) |




## AmazonAuroraMySqlInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAuroraMySqlInstance
include('aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstance')

' renders the element
AmazonAuroraMySqlInstance('AmazonAuroraMySqlInstance', 'Amazon Aurora My Sql Instance', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAuroraMySqlInstance
include('aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstance')

' renders the element
AmazonAuroraMySqlInstance('AmazonAuroraMySqlInstance', 'Amazon Aurora My Sql Instance', 'an optional tech label')
@enduml
```

## AmazonAuroraMySqlInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAuroraMySqlInstanceCard
include('aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstance')

' renders the element
AmazonAuroraMySqlInstanceCard('AmazonAuroraMySqlInstanceCard', 'Amazon Aurora My Sql Instance Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAuroraMySqlInstanceCard
include('aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstance')

' renders the element
AmazonAuroraMySqlInstanceCard('AmazonAuroraMySqlInstanceCard', 'Amazon Aurora My Sql Instance Card', 'an optional description')
@enduml
```

## AmazonAuroraMySqlInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAuroraMySqlInstanceGroup
include('aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstance')

' renders the element
AmazonAuroraMySqlInstanceGroup('AmazonAuroraMySqlInstanceGroup', 'Amazon Aurora My Sql Instance Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAuroraMySqlInstanceGroup
include('aws-q3-2021/Resource/Database/AmazonAuroraMySqlInstance')

' renders the element
AmazonAuroraMySqlInstanceGroup('AmazonAuroraMySqlInstanceGroup', 'Amazon Aurora My Sql Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

