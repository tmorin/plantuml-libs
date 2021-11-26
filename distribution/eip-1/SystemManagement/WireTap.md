# WireTap


```text
eip-1/SystemManagement/WireTap
```

```text
include('eip-1/SystemManagement/WireTap')
```



| Illustration | WireTap | WireTapGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/SystemManagement/WireTap.png) | ![illustration for WireTap](../../eip-1/SystemManagement/WireTap.Local.png) | ![illustration for WireTapGroup](../../eip-1/SystemManagement/WireTapGroup.Local.png) |




## WireTap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element WireTap
include('eip-1/SystemManagement/WireTap')

' renders the element
WireTap('WireTap', 'Wire Tap', 'an optional tech label')
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

' loads the Item which embeds the element WireTap
include('eip-1/SystemManagement/WireTap')

' renders the element
WireTap('WireTap', 'Wire Tap', 'an optional tech label')
@enduml
```

## WireTapGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element WireTapGroup
include('eip-1/SystemManagement/WireTap')

' renders the element
WireTapGroup('WireTapGroup', 'Wire Tap Group', 'an optional tech label') {
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

' loads the Item which embeds the element WireTapGroup
include('eip-1/SystemManagement/WireTap')

' renders the element
WireTapGroup('WireTapGroup', 'Wire Tap Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

