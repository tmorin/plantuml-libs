# WireTap


```text
eip/SystemManagement/WireTap
```

```text
include('eip/SystemManagement/WireTap')
```



| Illustration | WireTap | WireTapGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/SystemManagement/WireTap.png) | ![illustration for WireTap](../../eip/SystemManagement/WireTap.Local.png) | ![illustration for WireTapGroup](../../eip/SystemManagement/WireTapGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WireTapXs>`
- `<$WireTapSm>`
- `<$WireTapMd>`
- `<$WireTapLg>`





## WireTap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element WireTap
include('eip/SystemManagement/WireTap')

' renders the element
WireTap('WireTap', 'Wire Tap', 'an optional tech label', 'an optional description')
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
include('eip/bootstrap')

' loads the Item which embeds the element WireTap
include('eip/SystemManagement/WireTap')

' renders the element
WireTap('WireTap', 'Wire Tap', 'an optional tech label', 'an optional description')
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
include('eip/bootstrap')

' loads the Item which embeds the element WireTapGroup
include('eip/SystemManagement/WireTap')

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
include('eip/bootstrap')

' loads the Item which embeds the element WireTapGroup
include('eip/SystemManagement/WireTap')

' renders the element
WireTapGroup('WireTapGroup', 'Wire Tap Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

