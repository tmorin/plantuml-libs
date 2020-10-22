# Service Windows Virtual Desktop

```text
azure-v2/Item/Other/ServiceWindowsVirtualDesktop
```

```text
include('azure-v2/Item/Other/ServiceWindowsVirtualDesktop')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceWindowsVirtualDesktop.png)|![](ServiceWindowsVirtualDesktop.card.png)|![](ServiceWindowsVirtualDesktop.element.png)|![](ServiceWindowsVirtualDesktop.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWindowsVirtualDesktop element
include('azure-v2/Item/Other/ServiceWindowsVirtualDesktop')
ServiceWindowsVirtualDesktopCard('service_windows_virtual_desktop', 'Service Windows Virtual Desktop', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWindowsVirtualDesktop element
include('azure-v2/Item/Other/ServiceWindowsVirtualDesktop')
ServiceWindowsVirtualDesktopCard('service_windows_virtual_desktop', 'Service Windows Virtual Desktop', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWindowsVirtualDesktop element
include('azure-v2/Item/Other/ServiceWindowsVirtualDesktop')
ServiceWindowsVirtualDesktop('service_windows_virtual_desktop', 'Service Windows Virtual Desktop', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWindowsVirtualDesktop element
include('azure-v2/Item/Other/ServiceWindowsVirtualDesktop')
ServiceWindowsVirtualDesktop('service_windows_virtual_desktop', 'Service Windows Virtual Desktop', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWindowsVirtualDesktop element
include('azure-v2/Item/Other/ServiceWindowsVirtualDesktop')
ServiceWindowsVirtualDesktopGroup('service_windows_virtual_desktop', 'Service Windows Virtual Desktop', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWindowsVirtualDesktop element
include('azure-v2/Item/Other/ServiceWindowsVirtualDesktop')
ServiceWindowsVirtualDesktopGroup('service_windows_virtual_desktop', 'Service Windows Virtual Desktop', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

