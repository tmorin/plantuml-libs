# AmazonGuardDuty


```text
aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDuty
```

```text
include('aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')
```



| Illustration | AmazonGuardDuty | AmazonGuardDutyCard | AmazonGuardDutyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDuty.png) | ![illustration for AmazonGuardDuty](../../../aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDuty.Local.png) | ![illustration for AmazonGuardDutyCard](../../../aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDutyCard.Local.png) | ![illustration for AmazonGuardDutyGroup](../../../aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDutyGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonGuardDutyXs>`
- `<$AmazonGuardDutySm>`
- `<$AmazonGuardDutyMd>`
- `<$AmazonGuardDutyLg>`





## AmazonGuardDuty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonGuardDuty
include('aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')

' renders the element
AmazonGuardDuty('AmazonGuardDuty', 'Amazon Guard Duty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonGuardDuty
include('aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')

' renders the element
AmazonGuardDuty('AmazonGuardDuty', 'Amazon Guard Duty', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonGuardDutyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonGuardDutyCard
include('aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')

' renders the element
AmazonGuardDutyCard('AmazonGuardDutyCard', 'Amazon Guard Duty Card', 'an optional description')
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

' loads the Item which embeds the element AmazonGuardDutyCard
include('aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')

' renders the element
AmazonGuardDutyCard('AmazonGuardDutyCard', 'Amazon Guard Duty Card', 'an optional description')
@enduml
```

## AmazonGuardDutyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonGuardDutyGroup
include('aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')

' renders the element
AmazonGuardDutyGroup('AmazonGuardDutyGroup', 'Amazon Guard Duty Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonGuardDutyGroup
include('aws-q2-2023/Architecture/SecurityIdentityCompliance/AmazonGuardDuty')

' renders the element
AmazonGuardDutyGroup('AmazonGuardDutyGroup', 'Amazon Guard Duty Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

