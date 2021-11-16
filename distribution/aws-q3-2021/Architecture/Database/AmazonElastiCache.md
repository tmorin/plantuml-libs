# AmazonElastiCache


```text
aws-q3-2021/Architecture/Database/AmazonElastiCache
```

```text
include('aws-q3-2021/Architecture/Database/AmazonElastiCache')
```



| Illustration | AmazonElastiCache | AmazonElastiCacheCard | AmazonElastiCacheGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/Database/AmazonElastiCache.png) | ![illustration for AmazonElastiCache](../../../aws-q3-2021/Architecture/Database/AmazonElastiCache.Local.png) | ![illustration for AmazonElastiCacheCard](../../../aws-q3-2021/Architecture/Database/AmazonElastiCacheCard.Local.png) | ![illustration for AmazonElastiCacheGroup](../../../aws-q3-2021/Architecture/Database/AmazonElastiCacheGroup.Local.png) |




## AmazonElastiCache

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonElastiCache
include('aws-q3-2021/Architecture/Database/AmazonElastiCache')

' renders the element
AmazonElastiCache('AmazonElastiCache', 'Amazon Elasti Cache', 'an optional tech label')
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

' loads the Item which embeds the element AmazonElastiCache
include('aws-q3-2021/Architecture/Database/AmazonElastiCache')

' renders the element
AmazonElastiCache('AmazonElastiCache', 'Amazon Elasti Cache', 'an optional tech label')
@enduml
```

## AmazonElastiCacheCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonElastiCacheCard
include('aws-q3-2021/Architecture/Database/AmazonElastiCache')

' renders the element
AmazonElastiCacheCard('AmazonElastiCacheCard', 'Amazon Elasti Cache Card', 'an optional description')
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

' loads the Item which embeds the element AmazonElastiCacheCard
include('aws-q3-2021/Architecture/Database/AmazonElastiCache')

' renders the element
AmazonElastiCacheCard('AmazonElastiCacheCard', 'Amazon Elasti Cache Card', 'an optional description')
@enduml
```

## AmazonElastiCacheGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonElastiCacheGroup
include('aws-q3-2021/Architecture/Database/AmazonElastiCache')

' renders the element
AmazonElastiCacheGroup('AmazonElastiCacheGroup', 'Amazon Elasti Cache Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonElastiCacheGroup
include('aws-q3-2021/Architecture/Database/AmazonElastiCache')

' renders the element
AmazonElastiCacheGroup('AmazonElastiCacheGroup', 'Amazon Elasti Cache Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

