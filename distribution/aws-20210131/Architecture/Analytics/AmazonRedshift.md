# AmazonRedshift


```text
aws-20210131/Architecture/Analytics/AmazonRedshift
```

```text
include('aws-20210131/Architecture/Analytics/AmazonRedshift')
```



| Illustration | AmazonRedshift | AmazonRedshiftCard | AmazonRedshiftGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Analytics/AmazonRedshift.png) | ![illustration for AmazonRedshift](../../../aws-20210131/Architecture/Analytics/AmazonRedshift.Local.png) | ![illustration for AmazonRedshiftCard](../../../aws-20210131/Architecture/Analytics/AmazonRedshiftCard.Local.png) | ![illustration for AmazonRedshiftGroup](../../../aws-20210131/Architecture/Analytics/AmazonRedshiftGroup.Local.png) |




## AmazonRedshift

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonRedshift
include('aws-20210131/Architecture/Analytics/AmazonRedshift')

' renders the element
AmazonRedshift('AmazonRedshift', 'Amazon Redshift', 'an optional tech label')
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

' loads the Item which embeds the element AmazonRedshift
include('aws-20210131/Architecture/Analytics/AmazonRedshift')

' renders the element
AmazonRedshift('AmazonRedshift', 'Amazon Redshift', 'an optional tech label')
@enduml
```

## AmazonRedshiftCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonRedshiftCard
include('aws-20210131/Architecture/Analytics/AmazonRedshift')

' renders the element
AmazonRedshiftCard('AmazonRedshiftCard', 'Amazon Redshift Card', 'an optional description')
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

' loads the Item which embeds the element AmazonRedshiftCard
include('aws-20210131/Architecture/Analytics/AmazonRedshift')

' renders the element
AmazonRedshiftCard('AmazonRedshiftCard', 'Amazon Redshift Card', 'an optional description')
@enduml
```

## AmazonRedshiftGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonRedshiftGroup
include('aws-20210131/Architecture/Analytics/AmazonRedshift')

' renders the element
AmazonRedshiftGroup('AmazonRedshiftGroup', 'Amazon Redshift Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonRedshiftGroup
include('aws-20210131/Architecture/Analytics/AmazonRedshift')

' renders the element
AmazonRedshiftGroup('AmazonRedshiftGroup', 'Amazon Redshift Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

