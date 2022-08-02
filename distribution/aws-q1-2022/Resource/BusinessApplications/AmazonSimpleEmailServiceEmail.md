# AmazonSimpleEmailServiceEmail


```text
aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmail
```

```text
include('aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmail')
```



| Illustration | AmazonSimpleEmailServiceEmail | AmazonSimpleEmailServiceEmailCard | AmazonSimpleEmailServiceEmailGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmail.png) | ![illustration for AmazonSimpleEmailServiceEmail](../../../aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmail.Local.png) | ![illustration for AmazonSimpleEmailServiceEmailCard](../../../aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmailCard.Local.png) | ![illustration for AmazonSimpleEmailServiceEmailGroup](../../../aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmailGroup.Local.png) |




## AmazonSimpleEmailServiceEmail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleEmailServiceEmail
include('aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmail')

' renders the element
AmazonSimpleEmailServiceEmail('AmazonSimpleEmailServiceEmail', 'Amazon Simple Email Service Email', 'an optional tech label', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleEmailServiceEmail
include('aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmail')

' renders the element
AmazonSimpleEmailServiceEmail('AmazonSimpleEmailServiceEmail', 'Amazon Simple Email Service Email', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonSimpleEmailServiceEmailCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleEmailServiceEmailCard
include('aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmail')

' renders the element
AmazonSimpleEmailServiceEmailCard('AmazonSimpleEmailServiceEmailCard', 'Amazon Simple Email Service Email Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleEmailServiceEmailCard
include('aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmail')

' renders the element
AmazonSimpleEmailServiceEmailCard('AmazonSimpleEmailServiceEmailCard', 'Amazon Simple Email Service Email Card', 'an optional description')
@enduml
```

## AmazonSimpleEmailServiceEmailGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleEmailServiceEmailGroup
include('aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmail')

' renders the element
AmazonSimpleEmailServiceEmailGroup('AmazonSimpleEmailServiceEmailGroup', 'Amazon Simple Email Service Email Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleEmailServiceEmailGroup
include('aws-q1-2022/Resource/BusinessApplications/AmazonSimpleEmailServiceEmail')

' renders the element
AmazonSimpleEmailServiceEmailGroup('AmazonSimpleEmailServiceEmailGroup', 'Amazon Simple Email Service Email Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

