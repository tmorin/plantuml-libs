# RoutingSlip


```text
eip-1/MessageRouting/RoutingSlip
```

```text
include('eip-1/MessageRouting/RoutingSlip')
```



| Illustration | RoutingSlip | RoutingSlipGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageRouting/RoutingSlip.png) | ![illustration for RoutingSlip](../../eip-1/MessageRouting/RoutingSlip.Local.png) | ![illustration for RoutingSlipGroup](../../eip-1/MessageRouting/RoutingSlipGroup.Local.png) |




## RoutingSlip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element RoutingSlip
include('eip-1/MessageRouting/RoutingSlip')

' renders the element
RoutingSlip('RoutingSlip', 'Routing Slip', 'an optional tech label')
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
include('eip-1/bootstrap')

' loads the Item which embeds the element RoutingSlip
include('eip-1/MessageRouting/RoutingSlip')

' renders the element
RoutingSlip('RoutingSlip', 'Routing Slip', 'an optional tech label')
@enduml
```

## RoutingSlipGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element RoutingSlipGroup
include('eip-1/MessageRouting/RoutingSlip')

' renders the element
RoutingSlipGroup('RoutingSlipGroup', 'Routing Slip Group', 'an optional tech label') {
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
include('eip-1/bootstrap')

' loads the Item which embeds the element RoutingSlipGroup
include('eip-1/MessageRouting/RoutingSlip')

' renders the element
RoutingSlipGroup('RoutingSlipGroup', 'Routing Slip Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

