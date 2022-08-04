# OsPatchManagement


```text
gcp/Item/OsPatchManagement
```

```text
include('gcp/Item/OsPatchManagement')
```



| Illustration | OsPatchManagement | OsPatchManagementCard | OsPatchManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/OsPatchManagement.png) | ![illustration for OsPatchManagement](../../gcp/Item/OsPatchManagement.Local.png) | ![illustration for OsPatchManagementCard](../../gcp/Item/OsPatchManagementCard.Local.png) | ![illustration for OsPatchManagementGroup](../../gcp/Item/OsPatchManagementGroup.Local.png) |




## OsPatchManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element OsPatchManagement
include('gcp/Item/OsPatchManagement')

' renders the element
OsPatchManagement('OsPatchManagement', 'Os Patch Management', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element OsPatchManagement
include('gcp/Item/OsPatchManagement')

' renders the element
OsPatchManagement('OsPatchManagement', 'Os Patch Management', 'an optional tech label', 'an optional description')
@enduml
```

## OsPatchManagementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element OsPatchManagementCard
include('gcp/Item/OsPatchManagement')

' renders the element
OsPatchManagementCard('OsPatchManagementCard', 'Os Patch Management Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element OsPatchManagementCard
include('gcp/Item/OsPatchManagement')

' renders the element
OsPatchManagementCard('OsPatchManagementCard', 'Os Patch Management Card', 'an optional description')
@enduml
```

## OsPatchManagementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element OsPatchManagementGroup
include('gcp/Item/OsPatchManagement')

' renders the element
OsPatchManagementGroup('OsPatchManagementGroup', 'Os Patch Management Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element OsPatchManagementGroup
include('gcp/Item/OsPatchManagement')

' renders the element
OsPatchManagementGroup('OsPatchManagementGroup', 'Os Patch Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

