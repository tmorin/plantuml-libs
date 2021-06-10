# AmazonAuroraMariaDbInstance


```text
aws-20210131/Resource/Database/AmazonAuroraMariaDbInstance
```

```text
include('aws-20210131/Resource/Database/AmazonAuroraMariaDbInstance')
```



| Illustration | AmazonAuroraMariaDbInstance | AmazonAuroraMariaDbInstanceCard | AmazonAuroraMariaDbInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/Database/AmazonAuroraMariaDbInstance.png) | ![illustration for AmazonAuroraMariaDbInstance](../../../aws-20210131/Resource/Database/AmazonAuroraMariaDbInstance.Local.png) | ![illustration for AmazonAuroraMariaDbInstanceCard](../../../aws-20210131/Resource/Database/AmazonAuroraMariaDbInstanceCard.Local.png) | ![illustration for AmazonAuroraMariaDbInstanceGroup](../../../aws-20210131/Resource/Database/AmazonAuroraMariaDbInstanceGroup.Local.png) |




## AmazonAuroraMariaDbInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonAuroraMariaDbInstance
include('aws-20210131/Resource/Database/AmazonAuroraMariaDbInstance')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonAuroraMariaDbInstance
include('aws-20210131/Resource/Database/AmazonAuroraMariaDbInstance')

' renders the element
AmazonAuroraMariaDbInstance('AmazonAuroraMariaDbInstance', 'Amazon Aurora Maria Db Instance', 'an optional tech label')
@enduml
```

## AmazonAuroraMariaDbInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonAuroraMariaDbInstanceCard
include('aws-20210131/Resource/Database/AmazonAuroraMariaDbInstance')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonAuroraMariaDbInstanceCard
include('aws-20210131/Resource/Database/AmazonAuroraMariaDbInstance')

' renders the element
AmazonAuroraMariaDbInstanceCard('AmazonAuroraMariaDbInstanceCard', 'Amazon Aurora Maria Db Instance Card', 'an optional description')
@enduml
```

## AmazonAuroraMariaDbInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonAuroraMariaDbInstanceGroup
include('aws-20210131/Resource/Database/AmazonAuroraMariaDbInstance')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonAuroraMariaDbInstanceGroup
include('aws-20210131/Resource/Database/AmazonAuroraMariaDbInstance')

' renders the element
AmazonAuroraMariaDbInstanceGroup('AmazonAuroraMariaDbInstanceGroup', 'Amazon Aurora Maria Db Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

