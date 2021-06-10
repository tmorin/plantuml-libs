# ServiceIntuneForEducation


```text
azure-4/Item/Intune/ServiceIntuneForEducation
```

```text
include('azure-4/Item/Intune/ServiceIntuneForEducation')
```



| Illustration | ServiceIntuneForEducation | ServiceIntuneForEducationCard | ServiceIntuneForEducationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Intune/ServiceIntuneForEducation.png) | ![illustration for ServiceIntuneForEducation](../../../azure-4/Item/Intune/ServiceIntuneForEducation.Local.png) | ![illustration for ServiceIntuneForEducationCard](../../../azure-4/Item/Intune/ServiceIntuneForEducationCard.Local.png) | ![illustration for ServiceIntuneForEducationGroup](../../../azure-4/Item/Intune/ServiceIntuneForEducationGroup.Local.png) |




## ServiceIntuneForEducation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceIntuneForEducation
include('azure-4/Item/Intune/ServiceIntuneForEducation')

' renders the element
ServiceIntuneForEducation('ServiceIntuneForEducation', 'Service Intune For Education', 'an optional tech label')
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

' loads the Item which embeds the element ServiceIntuneForEducation
include('azure-4/Item/Intune/ServiceIntuneForEducation')

' renders the element
ServiceIntuneForEducation('ServiceIntuneForEducation', 'Service Intune For Education', 'an optional tech label')
@enduml
```

## ServiceIntuneForEducationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceIntuneForEducationCard
include('azure-4/Item/Intune/ServiceIntuneForEducation')

' renders the element
ServiceIntuneForEducationCard('ServiceIntuneForEducationCard', 'Service Intune For Education Card', 'an optional description')
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

' loads the Item which embeds the element ServiceIntuneForEducationCard
include('azure-4/Item/Intune/ServiceIntuneForEducation')

' renders the element
ServiceIntuneForEducationCard('ServiceIntuneForEducationCard', 'Service Intune For Education Card', 'an optional description')
@enduml
```

## ServiceIntuneForEducationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceIntuneForEducationGroup
include('azure-4/Item/Intune/ServiceIntuneForEducation')

' renders the element
ServiceIntuneForEducationGroup('ServiceIntuneForEducationGroup', 'Service Intune For Education Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceIntuneForEducationGroup
include('azure-4/Item/Intune/ServiceIntuneForEducation')

' renders the element
ServiceIntuneForEducationGroup('ServiceIntuneForEducationGroup', 'Service Intune For Education Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

