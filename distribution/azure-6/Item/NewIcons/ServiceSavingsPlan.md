# ServiceSavingsPlan


```text
azure-6/Item/NewIcons/ServiceSavingsPlan
```

```text
include('azure-6/Item/NewIcons/ServiceSavingsPlan')
```



| Illustration | ServiceSavingsPlan | ServiceSavingsPlanCard | ServiceSavingsPlanGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/NewIcons/ServiceSavingsPlan.png) | ![illustration for ServiceSavingsPlan](../../../azure-6/Item/NewIcons/ServiceSavingsPlan.Local.png) | ![illustration for ServiceSavingsPlanCard](../../../azure-6/Item/NewIcons/ServiceSavingsPlanCard.Local.png) | ![illustration for ServiceSavingsPlanGroup](../../../azure-6/Item/NewIcons/ServiceSavingsPlanGroup.Local.png) |




## ServiceSavingsPlan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlan
include('azure-6/Item/NewIcons/ServiceSavingsPlan')

' renders the element
ServiceSavingsPlan('ServiceSavingsPlan', 'Service Savings Plan', 'an optional tech label', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlan
include('azure-6/Item/NewIcons/ServiceSavingsPlan')

' renders the element
ServiceSavingsPlan('ServiceSavingsPlan', 'Service Savings Plan', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSavingsPlanCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlanCard
include('azure-6/Item/NewIcons/ServiceSavingsPlan')

' renders the element
ServiceSavingsPlanCard('ServiceSavingsPlanCard', 'Service Savings Plan Card', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlanCard
include('azure-6/Item/NewIcons/ServiceSavingsPlan')

' renders the element
ServiceSavingsPlanCard('ServiceSavingsPlanCard', 'Service Savings Plan Card', 'an optional description')
@enduml
```

## ServiceSavingsPlanGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlanGroup
include('azure-6/Item/NewIcons/ServiceSavingsPlan')

' renders the element
ServiceSavingsPlanGroup('ServiceSavingsPlanGroup', 'Service Savings Plan Group', 'an optional tech label') {
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlanGroup
include('azure-6/Item/NewIcons/ServiceSavingsPlan')

' renders the element
ServiceSavingsPlanGroup('ServiceSavingsPlanGroup', 'Service Savings Plan Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

