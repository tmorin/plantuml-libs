# AmazonForecast


```text
aws/Architecture/ArtificialIntelligence/AmazonForecast
```

```text
include('aws/Architecture/ArtificialIntelligence/AmazonForecast')
```



| Illustration | AmazonForecast | AmazonForecastCard | AmazonForecastGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ArtificialIntelligence/AmazonForecast.png) | ![illustration for AmazonForecast](../../../aws/Architecture/ArtificialIntelligence/AmazonForecast.Local.png) | ![illustration for AmazonForecastCard](../../../aws/Architecture/ArtificialIntelligence/AmazonForecastCard.Local.png) | ![illustration for AmazonForecastGroup](../../../aws/Architecture/ArtificialIntelligence/AmazonForecastGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonForecastXs>`
- `<$AmazonForecastSm>`
- `<$AmazonForecastMd>`
- `<$AmazonForecastLg>`





## AmazonForecast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonForecast
include('aws/Architecture/ArtificialIntelligence/AmazonForecast')

' renders the element
AmazonForecast('AmazonForecast', 'Amazon Forecast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonForecast
include('aws/Architecture/ArtificialIntelligence/AmazonForecast')

' renders the element
AmazonForecast('AmazonForecast', 'Amazon Forecast', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonForecastCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonForecastCard
include('aws/Architecture/ArtificialIntelligence/AmazonForecast')

' renders the element
AmazonForecastCard('AmazonForecastCard', 'Amazon Forecast Card', 'an optional description')
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

' loads the Item which embeds the element AmazonForecastCard
include('aws/Architecture/ArtificialIntelligence/AmazonForecast')

' renders the element
AmazonForecastCard('AmazonForecastCard', 'Amazon Forecast Card', 'an optional description')
@enduml
```

## AmazonForecastGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonForecastGroup
include('aws/Architecture/ArtificialIntelligence/AmazonForecast')

' renders the element
AmazonForecastGroup('AmazonForecastGroup', 'Amazon Forecast Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonForecastGroup
include('aws/Architecture/ArtificialIntelligence/AmazonForecast')

' renders the element
AmazonForecastGroup('AmazonForecastGroup', 'Amazon Forecast Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

