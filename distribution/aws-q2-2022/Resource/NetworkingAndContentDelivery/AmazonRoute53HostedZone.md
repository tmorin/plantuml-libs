# AmazonRoute53HostedZone


```text
aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZone
```

```text
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZone')
```



| Illustration | AmazonRoute53HostedZone | AmazonRoute53HostedZoneCard | AmazonRoute53HostedZoneGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZone.png) | ![illustration for AmazonRoute53HostedZone](../../../aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZone.Local.png) | ![illustration for AmazonRoute53HostedZoneCard](../../../aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZoneCard.Local.png) | ![illustration for AmazonRoute53HostedZoneGroup](../../../aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZoneGroup.Local.png) |




## AmazonRoute53HostedZone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonRoute53HostedZone
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZone')

' renders the element
AmazonRoute53HostedZone('AmazonRoute53HostedZone', 'Amazon Route53 Hosted Zone', 'an optional tech label', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonRoute53HostedZone
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZone')

' renders the element
AmazonRoute53HostedZone('AmazonRoute53HostedZone', 'Amazon Route53 Hosted Zone', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonRoute53HostedZoneCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonRoute53HostedZoneCard
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZone')

' renders the element
AmazonRoute53HostedZoneCard('AmazonRoute53HostedZoneCard', 'Amazon Route53 Hosted Zone Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonRoute53HostedZoneCard
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZone')

' renders the element
AmazonRoute53HostedZoneCard('AmazonRoute53HostedZoneCard', 'Amazon Route53 Hosted Zone Card', 'an optional description')
@enduml
```

## AmazonRoute53HostedZoneGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonRoute53HostedZoneGroup
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZone')

' renders the element
AmazonRoute53HostedZoneGroup('AmazonRoute53HostedZoneGroup', 'Amazon Route53 Hosted Zone Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonRoute53HostedZoneGroup
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/AmazonRoute53HostedZone')

' renders the element
AmazonRoute53HostedZoneGroup('AmazonRoute53HostedZoneGroup', 'Amazon Route53 Hosted Zone Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

