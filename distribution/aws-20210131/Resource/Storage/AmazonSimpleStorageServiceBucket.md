# AmazonSimpleStorageServiceBucket


```text
aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucket
```

```text
include('aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucket')
```



| Illustration | AmazonSimpleStorageServiceBucket | AmazonSimpleStorageServiceBucketCard | AmazonSimpleStorageServiceBucketGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucket.png) | ![illustration for AmazonSimpleStorageServiceBucket](../../../aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucket.Local.png) | ![illustration for AmazonSimpleStorageServiceBucketCard](../../../aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucketCard.Local.png) | ![illustration for AmazonSimpleStorageServiceBucketGroup](../../../aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucketGroup.Local.png) |




## AmazonSimpleStorageServiceBucket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceBucket
include('aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucket')

' renders the element
AmazonSimpleStorageServiceBucket('AmazonSimpleStorageServiceBucket', 'Amazon Simple Storage Service Bucket', 'an optional tech label')
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

' loads the Item which embeds the element AmazonSimpleStorageServiceBucket
include('aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucket')

' renders the element
AmazonSimpleStorageServiceBucket('AmazonSimpleStorageServiceBucket', 'Amazon Simple Storage Service Bucket', 'an optional tech label')
@enduml
```

## AmazonSimpleStorageServiceBucketCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceBucketCard
include('aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucket')

' renders the element
AmazonSimpleStorageServiceBucketCard('AmazonSimpleStorageServiceBucketCard', 'Amazon Simple Storage Service Bucket Card', 'an optional description')
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

' loads the Item which embeds the element AmazonSimpleStorageServiceBucketCard
include('aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucket')

' renders the element
AmazonSimpleStorageServiceBucketCard('AmazonSimpleStorageServiceBucketCard', 'Amazon Simple Storage Service Bucket Card', 'an optional description')
@enduml
```

## AmazonSimpleStorageServiceBucketGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceBucketGroup
include('aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucket')

' renders the element
AmazonSimpleStorageServiceBucketGroup('AmazonSimpleStorageServiceBucketGroup', 'Amazon Simple Storage Service Bucket Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonSimpleStorageServiceBucketGroup
include('aws-20210131/Resource/Storage/AmazonSimpleStorageServiceBucket')

' renders the element
AmazonSimpleStorageServiceBucketGroup('AmazonSimpleStorageServiceBucketGroup', 'Amazon Simple Storage Service Bucket Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

