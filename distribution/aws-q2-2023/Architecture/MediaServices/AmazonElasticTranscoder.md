# AmazonElasticTranscoder


```text
aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoder
```

```text
include('aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoder')
```



| Illustration | AmazonElasticTranscoder | AmazonElasticTranscoderCard | AmazonElasticTranscoderGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoder.png) | ![illustration for AmazonElasticTranscoder](../../../aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoder.Local.png) | ![illustration for AmazonElasticTranscoderCard](../../../aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoderCard.Local.png) | ![illustration for AmazonElasticTranscoderGroup](../../../aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoderGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonElasticTranscoderXs>`
- `<$AmazonElasticTranscoderSm>`
- `<$AmazonElasticTranscoderMd>`
- `<$AmazonElasticTranscoderLg>`





## AmazonElasticTranscoder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonElasticTranscoder
include('aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoder')

' renders the element
AmazonElasticTranscoder('AmazonElasticTranscoder', 'Amazon Elastic Transcoder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonElasticTranscoder
include('aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoder')

' renders the element
AmazonElasticTranscoder('AmazonElasticTranscoder', 'Amazon Elastic Transcoder', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonElasticTranscoderCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonElasticTranscoderCard
include('aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoder')

' renders the element
AmazonElasticTranscoderCard('AmazonElasticTranscoderCard', 'Amazon Elastic Transcoder Card', 'an optional description')
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

' loads the Item which embeds the element AmazonElasticTranscoderCard
include('aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoder')

' renders the element
AmazonElasticTranscoderCard('AmazonElasticTranscoderCard', 'Amazon Elastic Transcoder Card', 'an optional description')
@enduml
```

## AmazonElasticTranscoderGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonElasticTranscoderGroup
include('aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoder')

' renders the element
AmazonElasticTranscoderGroup('AmazonElasticTranscoderGroup', 'Amazon Elastic Transcoder Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonElasticTranscoderGroup
include('aws-q2-2023/Architecture/MediaServices/AmazonElasticTranscoder')

' renders the element
AmazonElasticTranscoderGroup('AmazonElasticTranscoderGroup', 'Amazon Elastic Transcoder Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

