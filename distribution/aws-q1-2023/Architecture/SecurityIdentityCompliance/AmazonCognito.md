# AmazonCognito


```text
aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognito
```

```text
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognito')
```



| Illustration | AmazonCognito | AmazonCognitoCard | AmazonCognitoGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognito.png) | ![illustration for AmazonCognito](../../../aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognito.Local.png) | ![illustration for AmazonCognitoCard](../../../aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognitoCard.Local.png) | ![illustration for AmazonCognitoGroup](../../../aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognitoGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonCognitoXs>`
- `<$AmazonCognitoSm>`
- `<$AmazonCognitoMd>`
- `<$AmazonCognitoLg>`





## AmazonCognito

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonCognito
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognito')

' renders the element
AmazonCognito('AmazonCognito', 'Amazon Cognito', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonCognito
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognito')

' renders the element
AmazonCognito('AmazonCognito', 'Amazon Cognito', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonCognitoCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonCognitoCard
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognito')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonCognitoCard
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognito')

' renders the element
AmazonCognitoCard('AmazonCognitoCard', 'Amazon Cognito Card', 'an optional description')
@enduml
```

## AmazonCognitoGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonCognitoGroup
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognito')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonCognitoGroup
include('aws-q1-2023/Architecture/SecurityIdentityCompliance/AmazonCognito')

' renders the element
AmazonCognitoGroup('AmazonCognitoGroup', 'Amazon Cognito Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

