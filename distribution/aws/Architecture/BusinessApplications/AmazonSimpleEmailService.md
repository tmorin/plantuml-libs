# AmazonSimpleEmailService


```text
aws/Architecture/BusinessApplications/AmazonSimpleEmailService
```

```text
include('aws/Architecture/BusinessApplications/AmazonSimpleEmailService')
```



| Illustration | AmazonSimpleEmailService | AmazonSimpleEmailServiceCard | AmazonSimpleEmailServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/BusinessApplications/AmazonSimpleEmailService.png) | ![illustration for AmazonSimpleEmailService](../../../aws/Architecture/BusinessApplications/AmazonSimpleEmailService.Local.png) | ![illustration for AmazonSimpleEmailServiceCard](../../../aws/Architecture/BusinessApplications/AmazonSimpleEmailServiceCard.Local.png) | ![illustration for AmazonSimpleEmailServiceGroup](../../../aws/Architecture/BusinessApplications/AmazonSimpleEmailServiceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonSimpleEmailServiceXs>`
- `<$AmazonSimpleEmailServiceSm>`
- `<$AmazonSimpleEmailServiceMd>`
- `<$AmazonSimpleEmailServiceLg>`





## AmazonSimpleEmailService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonSimpleEmailService
include('aws/Architecture/BusinessApplications/AmazonSimpleEmailService')

' renders the element
AmazonSimpleEmailService('AmazonSimpleEmailService', 'Amazon Simple Email Service', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonSimpleEmailService
include('aws/Architecture/BusinessApplications/AmazonSimpleEmailService')

' renders the element
AmazonSimpleEmailService('AmazonSimpleEmailService', 'Amazon Simple Email Service', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonSimpleEmailServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonSimpleEmailServiceCard
include('aws/Architecture/BusinessApplications/AmazonSimpleEmailService')

' renders the element
AmazonSimpleEmailServiceCard('AmazonSimpleEmailServiceCard', 'Amazon Simple Email Service Card', 'an optional description')
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

' loads the Item which embeds the element AmazonSimpleEmailServiceCard
include('aws/Architecture/BusinessApplications/AmazonSimpleEmailService')

' renders the element
AmazonSimpleEmailServiceCard('AmazonSimpleEmailServiceCard', 'Amazon Simple Email Service Card', 'an optional description')
@enduml
```

## AmazonSimpleEmailServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonSimpleEmailServiceGroup
include('aws/Architecture/BusinessApplications/AmazonSimpleEmailService')

' renders the element
AmazonSimpleEmailServiceGroup('AmazonSimpleEmailServiceGroup', 'Amazon Simple Email Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonSimpleEmailServiceGroup
include('aws/Architecture/BusinessApplications/AmazonSimpleEmailService')

' renders the element
AmazonSimpleEmailServiceGroup('AmazonSimpleEmailServiceGroup', 'Amazon Simple Email Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

