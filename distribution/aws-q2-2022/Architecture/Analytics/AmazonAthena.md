# AmazonAthena


```text
aws-q2-2022/Architecture/Analytics/AmazonAthena
```

```text
include('aws-q2-2022/Architecture/Analytics/AmazonAthena')
```



| Illustration | AmazonAthena | AmazonAthenaCard | AmazonAthenaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/Analytics/AmazonAthena.png) | ![illustration for AmazonAthena](../../../aws-q2-2022/Architecture/Analytics/AmazonAthena.Local.png) | ![illustration for AmazonAthenaCard](../../../aws-q2-2022/Architecture/Analytics/AmazonAthenaCard.Local.png) | ![illustration for AmazonAthenaGroup](../../../aws-q2-2022/Architecture/Analytics/AmazonAthenaGroup.Local.png) |




## AmazonAthena

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonAthena
include('aws-q2-2022/Architecture/Analytics/AmazonAthena')

' renders the element
AmazonAthena('AmazonAthena', 'Amazon Athena', 'an optional tech label', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonAthena
include('aws-q2-2022/Architecture/Analytics/AmazonAthena')

' renders the element
AmazonAthena('AmazonAthena', 'Amazon Athena', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonAthenaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonAthenaCard
include('aws-q2-2022/Architecture/Analytics/AmazonAthena')

' renders the element
AmazonAthenaCard('AmazonAthenaCard', 'Amazon Athena Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonAthenaCard
include('aws-q2-2022/Architecture/Analytics/AmazonAthena')

' renders the element
AmazonAthenaCard('AmazonAthenaCard', 'Amazon Athena Card', 'an optional description')
@enduml
```

## AmazonAthenaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonAthenaGroup
include('aws-q2-2022/Architecture/Analytics/AmazonAthena')

' renders the element
AmazonAthenaGroup('AmazonAthenaGroup', 'Amazon Athena Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonAthenaGroup
include('aws-q2-2022/Architecture/Analytics/AmazonAthena')

' renders the element
AmazonAthenaGroup('AmazonAthenaGroup', 'Amazon Athena Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

