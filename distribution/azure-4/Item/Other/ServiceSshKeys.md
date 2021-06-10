# ServiceSshKeys


```text
azure-4/Item/Other/ServiceSshKeys
```

```text
include('azure-4/Item/Other/ServiceSshKeys')
```



| Illustration | ServiceSshKeys | ServiceSshKeysCard | ServiceSshKeysGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Other/ServiceSshKeys.png) | ![illustration for ServiceSshKeys](../../../azure-4/Item/Other/ServiceSshKeys.Local.png) | ![illustration for ServiceSshKeysCard](../../../azure-4/Item/Other/ServiceSshKeysCard.Local.png) | ![illustration for ServiceSshKeysGroup](../../../azure-4/Item/Other/ServiceSshKeysGroup.Local.png) |




## ServiceSshKeys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceSshKeys
include('azure-4/Item/Other/ServiceSshKeys')

' renders the element
ServiceSshKeys('ServiceSshKeys', 'Service Ssh Keys', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceSshKeys
include('azure-4/Item/Other/ServiceSshKeys')

' renders the element
ServiceSshKeys('ServiceSshKeys', 'Service Ssh Keys', 'an optional tech label')
@enduml
```

## ServiceSshKeysCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceSshKeysCard
include('azure-4/Item/Other/ServiceSshKeys')

' renders the element
ServiceSshKeysCard('ServiceSshKeysCard', 'Service Ssh Keys Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceSshKeysCard
include('azure-4/Item/Other/ServiceSshKeys')

' renders the element
ServiceSshKeysCard('ServiceSshKeysCard', 'Service Ssh Keys Card', 'an optional description')
@enduml
```

## ServiceSshKeysGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceSshKeysGroup
include('azure-4/Item/Other/ServiceSshKeys')

' renders the element
ServiceSshKeysGroup('ServiceSshKeysGroup', 'Service Ssh Keys Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceSshKeysGroup
include('azure-4/Item/Other/ServiceSshKeys')

' renders the element
ServiceSshKeysGroup('ServiceSshKeysGroup', 'Service Ssh Keys Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

