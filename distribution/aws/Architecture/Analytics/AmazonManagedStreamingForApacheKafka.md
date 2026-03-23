# AmazonManagedStreamingForApacheKafka


```text
aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafka
```

```text
include('aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafka')
```



| Illustration | AmazonManagedStreamingForApacheKafka | AmazonManagedStreamingForApacheKafkaCard | AmazonManagedStreamingForApacheKafkaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafka.png) | ![illustration for AmazonManagedStreamingForApacheKafka](../../../aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafka.Local.png) | ![illustration for AmazonManagedStreamingForApacheKafkaCard](../../../aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafkaCard.Local.png) | ![illustration for AmazonManagedStreamingForApacheKafkaGroup](../../../aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafkaGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonManagedStreamingForApacheKafkaXs>`
- `<$AmazonManagedStreamingForApacheKafkaSm>`
- `<$AmazonManagedStreamingForApacheKafkaMd>`
- `<$AmazonManagedStreamingForApacheKafkaLg>`





## AmazonManagedStreamingForApacheKafka

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedStreamingForApacheKafka
include('aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafka')

' renders the element
AmazonManagedStreamingForApacheKafka('AmazonManagedStreamingForApacheKafka', 'Amazon Managed Streaming For Apache Kafka', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedStreamingForApacheKafka
include('aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafka')

' renders the element
AmazonManagedStreamingForApacheKafka('AmazonManagedStreamingForApacheKafka', 'Amazon Managed Streaming For Apache Kafka', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonManagedStreamingForApacheKafkaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedStreamingForApacheKafkaCard
include('aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafka')

' renders the element
AmazonManagedStreamingForApacheKafkaCard('AmazonManagedStreamingForApacheKafkaCard', 'Amazon Managed Streaming For Apache Kafka Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedStreamingForApacheKafkaCard
include('aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafka')

' renders the element
AmazonManagedStreamingForApacheKafkaCard('AmazonManagedStreamingForApacheKafkaCard', 'Amazon Managed Streaming For Apache Kafka Card', 'an optional description')
@enduml
```

## AmazonManagedStreamingForApacheKafkaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedStreamingForApacheKafkaGroup
include('aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafka')

' renders the element
AmazonManagedStreamingForApacheKafkaGroup('AmazonManagedStreamingForApacheKafkaGroup', 'Amazon Managed Streaming For Apache Kafka Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedStreamingForApacheKafkaGroup
include('aws/Architecture/Analytics/AmazonManagedStreamingForApacheKafka')

' renders the element
AmazonManagedStreamingForApacheKafkaGroup('AmazonManagedStreamingForApacheKafkaGroup', 'Amazon Managed Streaming For Apache Kafka Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

