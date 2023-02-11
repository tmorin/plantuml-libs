# SecurityIdentityCompliance


```text
aws-q1-2023/Category/SecurityIdentityCompliance
```

```text
include('aws-q1-2023/Category/SecurityIdentityCompliance')
```



| Illustration | SecurityIdentityCompliance | SecurityIdentityComplianceCard | SecurityIdentityComplianceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q1-2023/Category/SecurityIdentityCompliance.png) | ![illustration for SecurityIdentityCompliance](../../aws-q1-2023/Category/SecurityIdentityCompliance.Local.png) | ![illustration for SecurityIdentityComplianceCard](../../aws-q1-2023/Category/SecurityIdentityComplianceCard.Local.png) | ![illustration for SecurityIdentityComplianceGroup](../../aws-q1-2023/Category/SecurityIdentityComplianceGroup.Local.png) |




## SecurityIdentityCompliance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element SecurityIdentityCompliance
include('aws-q1-2023/Category/SecurityIdentityCompliance')

' renders the element
SecurityIdentityCompliance('SecurityIdentityCompliance', 'Security Identity Compliance', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element SecurityIdentityCompliance
include('aws-q1-2023/Category/SecurityIdentityCompliance')

' renders the element
SecurityIdentityCompliance('SecurityIdentityCompliance', 'Security Identity Compliance', 'an optional tech label', 'an optional description')
@enduml
```

## SecurityIdentityComplianceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element SecurityIdentityComplianceCard
include('aws-q1-2023/Category/SecurityIdentityCompliance')

' renders the element
SecurityIdentityComplianceCard('SecurityIdentityComplianceCard', 'Security Identity Compliance Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element SecurityIdentityComplianceCard
include('aws-q1-2023/Category/SecurityIdentityCompliance')

' renders the element
SecurityIdentityComplianceCard('SecurityIdentityComplianceCard', 'Security Identity Compliance Card', 'an optional description')
@enduml
```

## SecurityIdentityComplianceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element SecurityIdentityComplianceGroup
include('aws-q1-2023/Category/SecurityIdentityCompliance')

' renders the element
SecurityIdentityComplianceGroup('SecurityIdentityComplianceGroup', 'Security Identity Compliance Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element SecurityIdentityComplianceGroup
include('aws-q1-2023/Category/SecurityIdentityCompliance')

' renders the element
SecurityIdentityComplianceGroup('SecurityIdentityComplianceGroup', 'Security Identity Compliance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

