# ServicePartnerRegistration


```text
azure-11/Item/Integration/ServicePartnerRegistration
```

```text
include('azure-11/Item/Integration/ServicePartnerRegistration')
```



| Illustration | ServicePartnerRegistration | ServicePartnerRegistrationCard | ServicePartnerRegistrationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Integration/ServicePartnerRegistration.png) | ![illustration for ServicePartnerRegistration](../../../azure-11/Item/Integration/ServicePartnerRegistration.Local.png) | ![illustration for ServicePartnerRegistrationCard](../../../azure-11/Item/Integration/ServicePartnerRegistrationCard.Local.png) | ![illustration for ServicePartnerRegistrationGroup](../../../azure-11/Item/Integration/ServicePartnerRegistrationGroup.Local.png) |




## ServicePartnerRegistration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServicePartnerRegistration
include('azure-11/Item/Integration/ServicePartnerRegistration')

' renders the element
ServicePartnerRegistration('ServicePartnerRegistration', 'Service Partner Registration', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServicePartnerRegistration
include('azure-11/Item/Integration/ServicePartnerRegistration')

' renders the element
ServicePartnerRegistration('ServicePartnerRegistration', 'Service Partner Registration', 'an optional tech label', 'an optional description')
@enduml
```

## ServicePartnerRegistrationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServicePartnerRegistrationCard
include('azure-11/Item/Integration/ServicePartnerRegistration')

' renders the element
ServicePartnerRegistrationCard('ServicePartnerRegistrationCard', 'Service Partner Registration Card', 'an optional description')
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

' loads the Item which embeds the element ServicePartnerRegistrationCard
include('azure-11/Item/Integration/ServicePartnerRegistration')

' renders the element
ServicePartnerRegistrationCard('ServicePartnerRegistrationCard', 'Service Partner Registration Card', 'an optional description')
@enduml
```

## ServicePartnerRegistrationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServicePartnerRegistrationGroup
include('azure-11/Item/Integration/ServicePartnerRegistration')

' renders the element
ServicePartnerRegistrationGroup('ServicePartnerRegistrationGroup', 'Service Partner Registration Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServicePartnerRegistrationGroup
include('azure-11/Item/Integration/ServicePartnerRegistration')

' renders the element
ServicePartnerRegistrationGroup('ServicePartnerRegistrationGroup', 'Service Partner Registration Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

