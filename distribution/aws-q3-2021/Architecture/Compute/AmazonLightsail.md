# AmazonLightsail


```text
aws-q3-2021/Architecture/Compute/AmazonLightsail
```

```text
include('aws-q3-2021/Architecture/Compute/AmazonLightsail')
```



| Illustration | AmazonLightsail | AmazonLightsailCard | AmazonLightsailGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/Compute/AmazonLightsail.png) | ![illustration for AmazonLightsail](../../../aws-q3-2021/Architecture/Compute/AmazonLightsail.Local.png) | ![illustration for AmazonLightsailCard](../../../aws-q3-2021/Architecture/Compute/AmazonLightsailCard.Local.png) | ![illustration for AmazonLightsailGroup](../../../aws-q3-2021/Architecture/Compute/AmazonLightsailGroup.Local.png) |




## AmazonLightsail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonLightsail
include('aws-q3-2021/Architecture/Compute/AmazonLightsail')

' renders the element
AmazonLightsail('AmazonLightsail', 'Amazon Lightsail', 'an optional tech label')
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

' loads the Item which embeds the element AmazonLightsail
include('aws-q3-2021/Architecture/Compute/AmazonLightsail')

' renders the element
AmazonLightsail('AmazonLightsail', 'Amazon Lightsail', 'an optional tech label')
@enduml
```

## AmazonLightsailCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonLightsailCard
include('aws-q3-2021/Architecture/Compute/AmazonLightsail')

' renders the element
AmazonLightsailCard('AmazonLightsailCard', 'Amazon Lightsail Card', 'an optional description')
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

' loads the Item which embeds the element AmazonLightsailCard
include('aws-q3-2021/Architecture/Compute/AmazonLightsail')

' renders the element
AmazonLightsailCard('AmazonLightsailCard', 'Amazon Lightsail Card', 'an optional description')
@enduml
```

## AmazonLightsailGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonLightsailGroup
include('aws-q3-2021/Architecture/Compute/AmazonLightsail')

' renders the element
AmazonLightsailGroup('AmazonLightsailGroup', 'Amazon Lightsail Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonLightsailGroup
include('aws-q3-2021/Architecture/Compute/AmazonLightsail')

' renders the element
AmazonLightsailGroup('AmazonLightsailGroup', 'Amazon Lightsail Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

