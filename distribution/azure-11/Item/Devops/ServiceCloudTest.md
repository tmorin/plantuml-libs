# ServiceCloudTest


```text
azure-11/Item/Devops/ServiceCloudTest
```

```text
include('azure-11/Item/Devops/ServiceCloudTest')
```



| Illustration | ServiceCloudTest | ServiceCloudTestCard | ServiceCloudTestGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Devops/ServiceCloudTest.png) | ![illustration for ServiceCloudTest](../../../azure-11/Item/Devops/ServiceCloudTest.Local.png) | ![illustration for ServiceCloudTestCard](../../../azure-11/Item/Devops/ServiceCloudTestCard.Local.png) | ![illustration for ServiceCloudTestGroup](../../../azure-11/Item/Devops/ServiceCloudTestGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceCloudTestXs>`
- `<$ServiceCloudTestSm>`
- `<$ServiceCloudTestMd>`
- `<$ServiceCloudTestLg>`





## ServiceCloudTest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceCloudTest
include('azure-11/Item/Devops/ServiceCloudTest')

' renders the element
ServiceCloudTest('ServiceCloudTest', 'Service Cloud Test', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceCloudTest
include('azure-11/Item/Devops/ServiceCloudTest')

' renders the element
ServiceCloudTest('ServiceCloudTest', 'Service Cloud Test', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceCloudTestCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceCloudTestCard
include('azure-11/Item/Devops/ServiceCloudTest')

' renders the element
ServiceCloudTestCard('ServiceCloudTestCard', 'Service Cloud Test Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceCloudTestCard
include('azure-11/Item/Devops/ServiceCloudTest')

' renders the element
ServiceCloudTestCard('ServiceCloudTestCard', 'Service Cloud Test Card', 'an optional description')
@enduml
```

## ServiceCloudTestGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceCloudTestGroup
include('azure-11/Item/Devops/ServiceCloudTest')

' renders the element
ServiceCloudTestGroup('ServiceCloudTestGroup', 'Service Cloud Test Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceCloudTestGroup
include('azure-11/Item/Devops/ServiceCloudTest')

' renders the element
ServiceCloudTestGroup('ServiceCloudTestGroup', 'Service Cloud Test Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

