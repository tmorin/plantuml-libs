# AwsProfessionalServices


```text
aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServices
```

```text
include('aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServices')
```



| Illustration | AwsProfessionalServices | AwsProfessionalServicesCard | AwsProfessionalServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServices.png) | ![illustration for AwsProfessionalServices](../../../aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServices.Local.png) | ![illustration for AwsProfessionalServicesCard](../../../aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServicesCard.Local.png) | ![illustration for AwsProfessionalServicesGroup](../../../aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServicesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsProfessionalServicesXs>`
- `<$AwsProfessionalServicesSm>`
- `<$AwsProfessionalServicesMd>`
- `<$AwsProfessionalServicesLg>`





## AwsProfessionalServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsProfessionalServices
include('aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServices')

' renders the element
AwsProfessionalServices('AwsProfessionalServices', 'Aws Professional Services', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsProfessionalServices
include('aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServices')

' renders the element
AwsProfessionalServices('AwsProfessionalServices', 'Aws Professional Services', 'an optional tech label', 'an optional description')
@enduml
```

## AwsProfessionalServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsProfessionalServicesCard
include('aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServices')

' renders the element
AwsProfessionalServicesCard('AwsProfessionalServicesCard', 'Aws Professional Services Card', 'an optional description')
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

' loads the Item which embeds the element AwsProfessionalServicesCard
include('aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServices')

' renders the element
AwsProfessionalServicesCard('AwsProfessionalServicesCard', 'Aws Professional Services Card', 'an optional description')
@enduml
```

## AwsProfessionalServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsProfessionalServicesGroup
include('aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServices')

' renders the element
AwsProfessionalServicesGroup('AwsProfessionalServicesGroup', 'Aws Professional Services Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsProfessionalServicesGroup
include('aws-q1-2024/Architecture/CustomerEnablement/AwsProfessionalServices')

' renders the element
AwsProfessionalServicesGroup('AwsProfessionalServicesGroup', 'Aws Professional Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

