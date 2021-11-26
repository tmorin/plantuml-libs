# AwsGlueCrawler


```text
aws-q3-2021/Resource/Analytics/AwsGlueCrawler
```

```text
include('aws-q3-2021/Resource/Analytics/AwsGlueCrawler')
```



| Illustration | AwsGlueCrawler | AwsGlueCrawlerCard | AwsGlueCrawlerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/Analytics/AwsGlueCrawler.png) | ![illustration for AwsGlueCrawler](../../../aws-q3-2021/Resource/Analytics/AwsGlueCrawler.Local.png) | ![illustration for AwsGlueCrawlerCard](../../../aws-q3-2021/Resource/Analytics/AwsGlueCrawlerCard.Local.png) | ![illustration for AwsGlueCrawlerGroup](../../../aws-q3-2021/Resource/Analytics/AwsGlueCrawlerGroup.Local.png) |




## AwsGlueCrawler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueCrawler
include('aws-q3-2021/Resource/Analytics/AwsGlueCrawler')

' renders the element
AwsGlueCrawler('AwsGlueCrawler', 'Aws Glue Crawler', 'an optional tech label')
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

' loads the Item which embeds the element AwsGlueCrawler
include('aws-q3-2021/Resource/Analytics/AwsGlueCrawler')

' renders the element
AwsGlueCrawler('AwsGlueCrawler', 'Aws Glue Crawler', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueCrawlerCard
include('aws-q3-2021/Resource/Analytics/AwsGlueCrawler')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueCrawlerCard
include('aws-q3-2021/Resource/Analytics/AwsGlueCrawler')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueCrawlerGroup
include('aws-q3-2021/Resource/Analytics/AwsGlueCrawler')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueCrawlerGroup
include('aws-q3-2021/Resource/Analytics/AwsGlueCrawler')

' renders the element
AwsGlueCrawlerGroup('AwsGlueCrawlerGroup', 'Aws Glue Crawler Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

