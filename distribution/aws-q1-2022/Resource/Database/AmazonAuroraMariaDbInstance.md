# AmazonAuroraMariaDbInstance


```text
aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstance
```

```text
include('aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstance')
```



| Illustration | AmazonAuroraMariaDbInstance | AmazonAuroraMariaDbInstanceCard | AmazonAuroraMariaDbInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstance.png) | ![illustration for AmazonAuroraMariaDbInstance](../../../aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstance.Local.png) | ![illustration for AmazonAuroraMariaDbInstanceCard](../../../aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstanceCard.Local.png) | ![illustration for AmazonAuroraMariaDbInstanceGroup](../../../aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstanceGroup.Local.png) |




## AmazonAuroraMariaDbInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonAuroraMariaDbInstance
include('aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstance')

' renders the element
AmazonAuroraMariaDbInstance('AmazonAuroraMariaDbInstance', 'Amazon Aurora Maria Db Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonAuroraMariaDbInstance
include('aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstance')

' renders the element
AmazonAuroraMariaDbInstance('AmazonAuroraMariaDbInstance', 'Amazon Aurora Maria Db Instance', 'an optional tech label')
@enduml
```

## AmazonAuroraMariaDbInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonAuroraMariaDbInstanceCard
include('aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstance')

' renders the element
AmazonAuroraMariaDbInstanceCard('AmazonAuroraMariaDbInstanceCard', 'Amazon Aurora Maria Db Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonAuroraMariaDbInstanceCard
include('aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstance')

' renders the element
AmazonAuroraMariaDbInstanceCard('AmazonAuroraMariaDbInstanceCard', 'Amazon Aurora Maria Db Instance Card', 'an optional description')
@enduml
```

## AmazonAuroraMariaDbInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonAuroraMariaDbInstanceGroup
include('aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstance')

' renders the element
AmazonAuroraMariaDbInstanceGroup('AmazonAuroraMariaDbInstanceGroup', 'Amazon Aurora Maria Db Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonAuroraMariaDbInstanceGroup
include('aws-q1-2022/Resource/Database/AmazonAuroraMariaDbInstance')

' renders the element
AmazonAuroraMariaDbInstanceGroup('AmazonAuroraMariaDbInstanceGroup', 'Amazon Aurora Maria Db Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

