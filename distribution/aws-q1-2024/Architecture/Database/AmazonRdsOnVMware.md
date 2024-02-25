# AmazonRdsOnVMware


```text
aws-q1-2024/Architecture/Database/AmazonRdsOnVMware
```

```text
include('aws-q1-2024/Architecture/Database/AmazonRdsOnVMware')
```



| Illustration | AmazonRdsOnVMware | AmazonRdsOnVMwareCard | AmazonRdsOnVMwareGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Architecture/Database/AmazonRdsOnVMware.png) | ![illustration for AmazonRdsOnVMware](../../../aws-q1-2024/Architecture/Database/AmazonRdsOnVMware.Local.png) | ![illustration for AmazonRdsOnVMwareCard](../../../aws-q1-2024/Architecture/Database/AmazonRdsOnVMwareCard.Local.png) | ![illustration for AmazonRdsOnVMwareGroup](../../../aws-q1-2024/Architecture/Database/AmazonRdsOnVMwareGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonRdsOnVMwareXs>`
- `<$AmazonRdsOnVMwareSm>`
- `<$AmazonRdsOnVMwareMd>`
- `<$AmazonRdsOnVMwareLg>`





## AmazonRdsOnVMware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonRdsOnVMware
include('aws-q1-2024/Architecture/Database/AmazonRdsOnVMware')

' renders the element
AmazonRdsOnVMware('AmazonRdsOnVMware', 'Amazon Rds On V Mware', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonRdsOnVMware
include('aws-q1-2024/Architecture/Database/AmazonRdsOnVMware')

' renders the element
AmazonRdsOnVMware('AmazonRdsOnVMware', 'Amazon Rds On V Mware', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonRdsOnVMwareCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonRdsOnVMwareCard
include('aws-q1-2024/Architecture/Database/AmazonRdsOnVMware')

' renders the element
AmazonRdsOnVMwareCard('AmazonRdsOnVMwareCard', 'Amazon Rds On V Mware Card', 'an optional description')
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

' loads the Item which embeds the element AmazonRdsOnVMwareCard
include('aws-q1-2024/Architecture/Database/AmazonRdsOnVMware')

' renders the element
AmazonRdsOnVMwareCard('AmazonRdsOnVMwareCard', 'Amazon Rds On V Mware Card', 'an optional description')
@enduml
```

## AmazonRdsOnVMwareGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonRdsOnVMwareGroup
include('aws-q1-2024/Architecture/Database/AmazonRdsOnVMware')

' renders the element
AmazonRdsOnVMwareGroup('AmazonRdsOnVMwareGroup', 'Amazon Rds On V Mware Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonRdsOnVMwareGroup
include('aws-q1-2024/Architecture/Database/AmazonRdsOnVMware')

' renders the element
AmazonRdsOnVMwareGroup('AmazonRdsOnVMwareGroup', 'Amazon Rds On V Mware Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

