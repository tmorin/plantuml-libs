# Detour


```text
eip-1/SystemManagement/Detour
```

```text
include('eip-1/SystemManagement/Detour')
```



| Illustration | Detour | DetourGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/SystemManagement/Detour.png) | ![illustration for Detour](../../eip-1/SystemManagement/Detour.Local.png) | ![illustration for DetourGroup](../../eip-1/SystemManagement/DetourGroup.Local.png) |




## Detour

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element Detour
include('eip-1/SystemManagement/Detour')

' renders the element
Detour('Detour', 'Detour', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Detour
include('eip-1/SystemManagement/Detour')

' renders the element
Detour('Detour', 'Detour', 'an optional tech label', 'an optional description')
@enduml
```

## DetourGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element DetourGroup
include('eip-1/SystemManagement/Detour')

' renders the element
DetourGroup('DetourGroup', 'Detour Group', 'an optional tech label') {
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

' loads the Item which embeds the element DetourGroup
include('eip-1/SystemManagement/Detour')

' renders the element
DetourGroup('DetourGroup', 'Detour Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

