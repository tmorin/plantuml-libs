# AmazonCognito


```text
aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognito
```

```text
include('aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognito')
```



| Illustration | AmazonCognito | AmazonCognitoCard | AmazonCognitoGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognito.png) | ![illustration for AmazonCognito](../../../aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognito.Local.png) | ![illustration for AmazonCognitoCard](../../../aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognitoCard.Local.png) | ![illustration for AmazonCognitoGroup](../../../aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognitoGroup.Local.png) |




## AmazonCognito

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonCognito
include('aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognito')

' renders the element
AmazonCognito('AmazonCognito', 'Amazon Cognito', 'an optional tech label')
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

' loads the Item which embeds the element AmazonCognito
include('aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognito')

' renders the element
AmazonCognito('AmazonCognito', 'Amazon Cognito', 'an optional tech label')
@enduml
```

## AmazonCognitoCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonCognitoCard
include('aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognito')

' renders the element
AmazonCognitoCard('AmazonCognitoCard', 'Amazon Cognito Card', 'an optional description')
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

' loads the Item which embeds the element AmazonCognitoCard
include('aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognito')

' renders the element
AmazonCognitoCard('AmazonCognitoCard', 'Amazon Cognito Card', 'an optional description')
@enduml
```

## AmazonCognitoGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonCognitoGroup
include('aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognito')

' renders the element
AmazonCognitoGroup('AmazonCognitoGroup', 'Amazon Cognito Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonCognitoGroup
include('aws-20210730/Architecture/SecurityIdentityCompliance/AmazonCognito')

' renders the element
AmazonCognitoGroup('AmazonCognitoGroup', 'Amazon Cognito Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

