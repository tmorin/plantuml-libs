# SecurityIdentityCompliance


```text
aws-q3-2021/Category/SecurityIdentityCompliance
```

```text
include('aws-q3-2021/Category/SecurityIdentityCompliance')
```



| Illustration | SecurityIdentityCompliance | SecurityIdentityComplianceCard | SecurityIdentityComplianceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q3-2021/Category/SecurityIdentityCompliance.png) | ![illustration for SecurityIdentityCompliance](../../aws-q3-2021/Category/SecurityIdentityCompliance.Local.png) | ![illustration for SecurityIdentityComplianceCard](../../aws-q3-2021/Category/SecurityIdentityComplianceCard.Local.png) | ![illustration for SecurityIdentityComplianceGroup](../../aws-q3-2021/Category/SecurityIdentityComplianceGroup.Local.png) |




## SecurityIdentityCompliance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element SecurityIdentityCompliance
include('aws-q3-2021/Category/SecurityIdentityCompliance')

' renders the element
SecurityIdentityCompliance('SecurityIdentityCompliance', 'Security Identity Compliance', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element SecurityIdentityCompliance
include('aws-q3-2021/Category/SecurityIdentityCompliance')

' renders the element
SecurityIdentityCompliance('SecurityIdentityCompliance', 'Security Identity Compliance', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element SecurityIdentityComplianceCard
include('aws-q3-2021/Category/SecurityIdentityCompliance')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element SecurityIdentityComplianceCard
include('aws-q3-2021/Category/SecurityIdentityCompliance')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element SecurityIdentityComplianceGroup
include('aws-q3-2021/Category/SecurityIdentityCompliance')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element SecurityIdentityComplianceGroup
include('aws-q3-2021/Category/SecurityIdentityCompliance')

' renders the element
SecurityIdentityComplianceGroup('SecurityIdentityComplianceGroup', 'Security Identity Compliance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

