# AwsGlueCrawler


```text
aws-q1-2025/Resource/Analytics/AwsGlueCrawler
```

```text
include('aws-q1-2025/Resource/Analytics/AwsGlueCrawler')
```



| Illustration | AwsGlueCrawler | AwsGlueCrawlerCard | AwsGlueCrawlerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/Analytics/AwsGlueCrawler.png) | ![illustration for AwsGlueCrawler](../../../aws-q1-2025/Resource/Analytics/AwsGlueCrawler.Local.png) | ![illustration for AwsGlueCrawlerCard](../../../aws-q1-2025/Resource/Analytics/AwsGlueCrawlerCard.Local.png) | ![illustration for AwsGlueCrawlerGroup](../../../aws-q1-2025/Resource/Analytics/AwsGlueCrawlerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsGlueCrawlerXs>`
- `<$AwsGlueCrawlerSm>`
- `<$AwsGlueCrawlerMd>`
- `<$AwsGlueCrawlerLg>`





## AwsGlueCrawler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsGlueCrawler
include('aws-q1-2025/Resource/Analytics/AwsGlueCrawler')

' renders the element
AwsGlueCrawler('AwsGlueCrawler', 'Aws Glue Crawler', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsGlueCrawler
include('aws-q1-2025/Resource/Analytics/AwsGlueCrawler')

' renders the element
AwsGlueCrawler('AwsGlueCrawler', 'Aws Glue Crawler', 'an optional tech label', 'an optional description')
@enduml
```

## AwsGlueCrawlerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsGlueCrawlerCard
include('aws-q1-2025/Resource/Analytics/AwsGlueCrawler')

' renders the element
AwsGlueCrawlerCard('AwsGlueCrawlerCard', 'Aws Glue Crawler Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsGlueCrawlerCard
include('aws-q1-2025/Resource/Analytics/AwsGlueCrawler')

' renders the element
AwsGlueCrawlerCard('AwsGlueCrawlerCard', 'Aws Glue Crawler Card', 'an optional description')
@enduml
```

## AwsGlueCrawlerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsGlueCrawlerGroup
include('aws-q1-2025/Resource/Analytics/AwsGlueCrawler')

' renders the element
AwsGlueCrawlerGroup('AwsGlueCrawlerGroup', 'Aws Glue Crawler Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsGlueCrawlerGroup
include('aws-q1-2025/Resource/Analytics/AwsGlueCrawler')

' renders the element
AwsGlueCrawlerGroup('AwsGlueCrawlerGroup', 'Aws Glue Crawler Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

