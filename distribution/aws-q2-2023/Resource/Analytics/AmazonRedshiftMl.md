# AmazonRedshiftMl


```text
aws-q2-2023/Resource/Analytics/AmazonRedshiftMl
```

```text
include('aws-q2-2023/Resource/Analytics/AmazonRedshiftMl')
```



| Illustration | AmazonRedshiftMl | AmazonRedshiftMlCard | AmazonRedshiftMlGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Resource/Analytics/AmazonRedshiftMl.png) | ![illustration for AmazonRedshiftMl](../../../aws-q2-2023/Resource/Analytics/AmazonRedshiftMl.Local.png) | ![illustration for AmazonRedshiftMlCard](../../../aws-q2-2023/Resource/Analytics/AmazonRedshiftMlCard.Local.png) | ![illustration for AmazonRedshiftMlGroup](../../../aws-q2-2023/Resource/Analytics/AmazonRedshiftMlGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonRedshiftMlXs>`
- `<$AmazonRedshiftMlSm>`
- `<$AmazonRedshiftMlMd>`
- `<$AmazonRedshiftMlLg>`





## AmazonRedshiftMl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonRedshiftMl
include('aws-q2-2023/Resource/Analytics/AmazonRedshiftMl')

' renders the element
AmazonRedshiftMl('AmazonRedshiftMl', 'Amazon Redshift Ml', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonRedshiftMl
include('aws-q2-2023/Resource/Analytics/AmazonRedshiftMl')

' renders the element
AmazonRedshiftMl('AmazonRedshiftMl', 'Amazon Redshift Ml', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonRedshiftMlCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonRedshiftMlCard
include('aws-q2-2023/Resource/Analytics/AmazonRedshiftMl')

' renders the element
AmazonRedshiftMlCard('AmazonRedshiftMlCard', 'Amazon Redshift Ml Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonRedshiftMlCard
include('aws-q2-2023/Resource/Analytics/AmazonRedshiftMl')

' renders the element
AmazonRedshiftMlCard('AmazonRedshiftMlCard', 'Amazon Redshift Ml Card', 'an optional description')
@enduml
```

## AmazonRedshiftMlGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonRedshiftMlGroup
include('aws-q2-2023/Resource/Analytics/AmazonRedshiftMl')

' renders the element
AmazonRedshiftMlGroup('AmazonRedshiftMlGroup', 'Amazon Redshift Ml Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonRedshiftMlGroup
include('aws-q2-2023/Resource/Analytics/AmazonRedshiftMl')

' renders the element
AmazonRedshiftMlGroup('AmazonRedshiftMlGroup', 'Amazon Redshift Ml Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

