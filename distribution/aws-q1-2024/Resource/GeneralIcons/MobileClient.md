# MobileClient


```text
aws-q1-2024/Resource/GeneralIcons/MobileClient
```

```text
include('aws-q1-2024/Resource/GeneralIcons/MobileClient')
```



| Illustration | MobileClient | MobileClientCard | MobileClientGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Resource/GeneralIcons/MobileClient.png) | ![illustration for MobileClient](../../../aws-q1-2024/Resource/GeneralIcons/MobileClient.Local.png) | ![illustration for MobileClientCard](../../../aws-q1-2024/Resource/GeneralIcons/MobileClientCard.Local.png) | ![illustration for MobileClientGroup](../../../aws-q1-2024/Resource/GeneralIcons/MobileClientGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileClientXs>`
- `<$MobileClientSm>`
- `<$MobileClientMd>`
- `<$MobileClientLg>`





## MobileClient

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element MobileClient
include('aws-q1-2024/Resource/GeneralIcons/MobileClient')

' renders the element
MobileClient('MobileClient', 'Mobile Client', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element MobileClient
include('aws-q1-2024/Resource/GeneralIcons/MobileClient')

' renders the element
MobileClient('MobileClient', 'Mobile Client', 'an optional tech label', 'an optional description')
@enduml
```

## MobileClientCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element MobileClientCard
include('aws-q1-2024/Resource/GeneralIcons/MobileClient')

' renders the element
MobileClientCard('MobileClientCard', 'Mobile Client Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element MobileClientCard
include('aws-q1-2024/Resource/GeneralIcons/MobileClient')

' renders the element
MobileClientCard('MobileClientCard', 'Mobile Client Card', 'an optional description')
@enduml
```

## MobileClientGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element MobileClientGroup
include('aws-q1-2024/Resource/GeneralIcons/MobileClient')

' renders the element
MobileClientGroup('MobileClientGroup', 'Mobile Client Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element MobileClientGroup
include('aws-q1-2024/Resource/GeneralIcons/MobileClient')

' renders the element
MobileClientGroup('MobileClientGroup', 'Mobile Client Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

