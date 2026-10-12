# AwsPaymentCryptography


```text
aws/Architecture/SecurityIdentity/AwsPaymentCryptography
```

```text
include('aws/Architecture/SecurityIdentity/AwsPaymentCryptography')
```



| Illustration | AwsPaymentCryptography | AwsPaymentCryptographyCard | AwsPaymentCryptographyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/SecurityIdentity/AwsPaymentCryptography.png) | ![illustration for AwsPaymentCryptography](../../../aws/Architecture/SecurityIdentity/AwsPaymentCryptography.Local.png) | ![illustration for AwsPaymentCryptographyCard](../../../aws/Architecture/SecurityIdentity/AwsPaymentCryptographyCard.Local.png) | ![illustration for AwsPaymentCryptographyGroup](../../../aws/Architecture/SecurityIdentity/AwsPaymentCryptographyGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsPaymentCryptographyXs>`
- `<$AwsPaymentCryptographySm>`
- `<$AwsPaymentCryptographyMd>`
- `<$AwsPaymentCryptographyLg>`





## AwsPaymentCryptography

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsPaymentCryptography
include('aws/Architecture/SecurityIdentity/AwsPaymentCryptography')

' renders the element
AwsPaymentCryptography('AwsPaymentCryptography', 'Aws Payment Cryptography', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsPaymentCryptography
include('aws/Architecture/SecurityIdentity/AwsPaymentCryptography')

' renders the element
AwsPaymentCryptography('AwsPaymentCryptography', 'Aws Payment Cryptography', 'an optional tech label', 'an optional description')
@enduml
```

## AwsPaymentCryptographyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsPaymentCryptographyCard
include('aws/Architecture/SecurityIdentity/AwsPaymentCryptography')

' renders the element
AwsPaymentCryptographyCard('AwsPaymentCryptographyCard', 'Aws Payment Cryptography Card', 'an optional description')
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

' loads the Item which embeds the element AwsPaymentCryptographyCard
include('aws/Architecture/SecurityIdentity/AwsPaymentCryptography')

' renders the element
AwsPaymentCryptographyCard('AwsPaymentCryptographyCard', 'Aws Payment Cryptography Card', 'an optional description')
@enduml
```

## AwsPaymentCryptographyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsPaymentCryptographyGroup
include('aws/Architecture/SecurityIdentity/AwsPaymentCryptography')

' renders the element
AwsPaymentCryptographyGroup('AwsPaymentCryptographyGroup', 'Aws Payment Cryptography Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsPaymentCryptographyGroup
include('aws/Architecture/SecurityIdentity/AwsPaymentCryptography')

' renders the element
AwsPaymentCryptographyGroup('AwsPaymentCryptographyGroup', 'Aws Payment Cryptography Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

