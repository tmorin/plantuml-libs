# AwsDataExchange


```text
aws-20210131/Architecture/Analytics/AwsDataExchange
```

```text
include('aws-20210131/Architecture/Analytics/AwsDataExchange')
```



| Illustration | AwsDataExchange | AwsDataExchangeCard | AwsDataExchangeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Analytics/AwsDataExchange.png) | ![illustration for AwsDataExchange](../../../aws-20210131/Architecture/Analytics/AwsDataExchange.Local.png) | ![illustration for AwsDataExchangeCard](../../../aws-20210131/Architecture/Analytics/AwsDataExchangeCard.Local.png) | ![illustration for AwsDataExchangeGroup](../../../aws-20210131/Architecture/Analytics/AwsDataExchangeGroup.Local.png) |




## AwsDataExchange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsDataExchange
include('aws-20210131/Architecture/Analytics/AwsDataExchange')

' renders the element
AwsDataExchange('AwsDataExchange', 'Aws Data Exchange', 'an optional tech label')
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

' loads the Item which embeds the element AwsDataExchange
include('aws-20210131/Architecture/Analytics/AwsDataExchange')

' renders the element
AwsDataExchange('AwsDataExchange', 'Aws Data Exchange', 'an optional tech label')
@enduml
```

## AwsDataExchangeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsDataExchangeCard
include('aws-20210131/Architecture/Analytics/AwsDataExchange')

' renders the element
AwsDataExchangeCard('AwsDataExchangeCard', 'Aws Data Exchange Card', 'an optional description')
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

' loads the Item which embeds the element AwsDataExchangeCard
include('aws-20210131/Architecture/Analytics/AwsDataExchange')

' renders the element
AwsDataExchangeCard('AwsDataExchangeCard', 'Aws Data Exchange Card', 'an optional description')
@enduml
```

## AwsDataExchangeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsDataExchangeGroup
include('aws-20210131/Architecture/Analytics/AwsDataExchange')

' renders the element
AwsDataExchangeGroup('AwsDataExchangeGroup', 'Aws Data Exchange Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsDataExchangeGroup
include('aws-20210131/Architecture/Analytics/AwsDataExchange')

' renders the element
AwsDataExchangeGroup('AwsDataExchangeGroup', 'Aws Data Exchange Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

