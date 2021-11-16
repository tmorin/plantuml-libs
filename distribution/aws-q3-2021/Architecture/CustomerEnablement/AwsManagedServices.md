# AwsManagedServices


```text
aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServices
```

```text
include('aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServices')
```



| Illustration | AwsManagedServices | AwsManagedServicesCard | AwsManagedServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServices.png) | ![illustration for AwsManagedServices](../../../aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServices.Local.png) | ![illustration for AwsManagedServicesCard](../../../aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServicesCard.Local.png) | ![illustration for AwsManagedServicesGroup](../../../aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServicesGroup.Local.png) |




## AwsManagedServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsManagedServices
include('aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServices')

' renders the element
AwsManagedServices('AwsManagedServices', 'Aws Managed Services', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsManagedServices
include('aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServices')

' renders the element
AwsManagedServices('AwsManagedServices', 'Aws Managed Services', 'an optional tech label')
@enduml
```

## AwsManagedServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsManagedServicesCard
include('aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServices')

' renders the element
AwsManagedServicesCard('AwsManagedServicesCard', 'Aws Managed Services Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsManagedServicesCard
include('aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServices')

' renders the element
AwsManagedServicesCard('AwsManagedServicesCard', 'Aws Managed Services Card', 'an optional description')
@enduml
```

## AwsManagedServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsManagedServicesGroup
include('aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServices')

' renders the element
AwsManagedServicesGroup('AwsManagedServicesGroup', 'Aws Managed Services Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsManagedServicesGroup
include('aws-q3-2021/Architecture/CustomerEnablement/AwsManagedServices')

' renders the element
AwsManagedServicesGroup('AwsManagedServicesGroup', 'Aws Managed Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

