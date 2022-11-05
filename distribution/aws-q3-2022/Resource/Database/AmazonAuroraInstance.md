# AmazonAuroraInstance


```text
aws-q3-2022/Resource/Database/AmazonAuroraInstance
```

```text
include('aws-q3-2022/Resource/Database/AmazonAuroraInstance')
```



| Illustration | AmazonAuroraInstance | AmazonAuroraInstanceCard | AmazonAuroraInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/Database/AmazonAuroraInstance.png) | ![illustration for AmazonAuroraInstance](../../../aws-q3-2022/Resource/Database/AmazonAuroraInstance.Local.png) | ![illustration for AmazonAuroraInstanceCard](../../../aws-q3-2022/Resource/Database/AmazonAuroraInstanceCard.Local.png) | ![illustration for AmazonAuroraInstanceGroup](../../../aws-q3-2022/Resource/Database/AmazonAuroraInstanceGroup.Local.png) |




## AmazonAuroraInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonAuroraInstance
include('aws-q3-2022/Resource/Database/AmazonAuroraInstance')

' renders the element
AmazonAuroraInstance('AmazonAuroraInstance', 'Amazon Aurora Instance', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonAuroraInstance
include('aws-q3-2022/Resource/Database/AmazonAuroraInstance')

' renders the element
AmazonAuroraInstance('AmazonAuroraInstance', 'Amazon Aurora Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonAuroraInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonAuroraInstanceCard
include('aws-q3-2022/Resource/Database/AmazonAuroraInstance')

' renders the element
AmazonAuroraInstanceCard('AmazonAuroraInstanceCard', 'Amazon Aurora Instance Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonAuroraInstanceCard
include('aws-q3-2022/Resource/Database/AmazonAuroraInstance')

' renders the element
AmazonAuroraInstanceCard('AmazonAuroraInstanceCard', 'Amazon Aurora Instance Card', 'an optional description')
@enduml
```

## AmazonAuroraInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonAuroraInstanceGroup
include('aws-q3-2022/Resource/Database/AmazonAuroraInstance')

' renders the element
AmazonAuroraInstanceGroup('AmazonAuroraInstanceGroup', 'Amazon Aurora Instance Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonAuroraInstanceGroup
include('aws-q3-2022/Resource/Database/AmazonAuroraInstance')

' renders the element
AmazonAuroraInstanceGroup('AmazonAuroraInstanceGroup', 'Amazon Aurora Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

