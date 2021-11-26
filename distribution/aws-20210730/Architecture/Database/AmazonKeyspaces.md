# AmazonKeyspaces


```text
aws-20210730/Architecture/Database/AmazonKeyspaces
```

```text
include('aws-20210730/Architecture/Database/AmazonKeyspaces')
```



| Illustration | AmazonKeyspaces | AmazonKeyspacesCard | AmazonKeyspacesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/Database/AmazonKeyspaces.png) | ![illustration for AmazonKeyspaces](../../../aws-20210730/Architecture/Database/AmazonKeyspaces.Local.png) | ![illustration for AmazonKeyspacesCard](../../../aws-20210730/Architecture/Database/AmazonKeyspacesCard.Local.png) | ![illustration for AmazonKeyspacesGroup](../../../aws-20210730/Architecture/Database/AmazonKeyspacesGroup.Local.png) |




## AmazonKeyspaces

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKeyspaces
include('aws-20210730/Architecture/Database/AmazonKeyspaces')

' renders the element
AmazonKeyspaces('AmazonKeyspaces', 'Amazon Keyspaces', 'an optional tech label')
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

' loads the Item which embeds the element AmazonKeyspaces
include('aws-20210730/Architecture/Database/AmazonKeyspaces')

' renders the element
AmazonKeyspaces('AmazonKeyspaces', 'Amazon Keyspaces', 'an optional tech label')
@enduml
```

## AmazonKeyspacesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKeyspacesCard
include('aws-20210730/Architecture/Database/AmazonKeyspaces')

' renders the element
AmazonKeyspacesCard('AmazonKeyspacesCard', 'Amazon Keyspaces Card', 'an optional description')
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

' loads the Item which embeds the element AmazonKeyspacesCard
include('aws-20210730/Architecture/Database/AmazonKeyspaces')

' renders the element
AmazonKeyspacesCard('AmazonKeyspacesCard', 'Amazon Keyspaces Card', 'an optional description')
@enduml
```

## AmazonKeyspacesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonKeyspacesGroup
include('aws-20210730/Architecture/Database/AmazonKeyspaces')

' renders the element
AmazonKeyspacesGroup('AmazonKeyspacesGroup', 'Amazon Keyspaces Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonKeyspacesGroup
include('aws-20210730/Architecture/Database/AmazonKeyspaces')

' renders the element
AmazonKeyspacesGroup('AmazonKeyspacesGroup', 'Amazon Keyspaces Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

