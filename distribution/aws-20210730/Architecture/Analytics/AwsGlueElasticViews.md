# AwsGlueElasticViews


```text
aws-20210730/Architecture/Analytics/AwsGlueElasticViews
```

```text
include('aws-20210730/Architecture/Analytics/AwsGlueElasticViews')
```



| Illustration | AwsGlueElasticViews | AwsGlueElasticViewsCard | AwsGlueElasticViewsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/Analytics/AwsGlueElasticViews.png) | ![illustration for AwsGlueElasticViews](../../../aws-20210730/Architecture/Analytics/AwsGlueElasticViews.Local.png) | ![illustration for AwsGlueElasticViewsCard](../../../aws-20210730/Architecture/Analytics/AwsGlueElasticViewsCard.Local.png) | ![illustration for AwsGlueElasticViewsGroup](../../../aws-20210730/Architecture/Analytics/AwsGlueElasticViewsGroup.Local.png) |




## AwsGlueElasticViews

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsGlueElasticViews
include('aws-20210730/Architecture/Analytics/AwsGlueElasticViews')

' renders the element
AwsGlueElasticViews('AwsGlueElasticViews', 'Aws Glue Elastic Views', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsGlueElasticViews
include('aws-20210730/Architecture/Analytics/AwsGlueElasticViews')

' renders the element
AwsGlueElasticViews('AwsGlueElasticViews', 'Aws Glue Elastic Views', 'an optional tech label')
@enduml
```

## AwsGlueElasticViewsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsGlueElasticViewsCard
include('aws-20210730/Architecture/Analytics/AwsGlueElasticViews')

' renders the element
AwsGlueElasticViewsCard('AwsGlueElasticViewsCard', 'Aws Glue Elastic Views Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsGlueElasticViewsCard
include('aws-20210730/Architecture/Analytics/AwsGlueElasticViews')

' renders the element
AwsGlueElasticViewsCard('AwsGlueElasticViewsCard', 'Aws Glue Elastic Views Card', 'an optional description')
@enduml
```

## AwsGlueElasticViewsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsGlueElasticViewsGroup
include('aws-20210730/Architecture/Analytics/AwsGlueElasticViews')

' renders the element
AwsGlueElasticViewsGroup('AwsGlueElasticViewsGroup', 'Aws Glue Elastic Views Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsGlueElasticViewsGroup
include('aws-20210730/Architecture/Analytics/AwsGlueElasticViews')

' renders the element
AwsGlueElasticViewsGroup('AwsGlueElasticViewsGroup', 'Aws Glue Elastic Views Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

