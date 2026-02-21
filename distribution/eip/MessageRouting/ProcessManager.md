# ProcessManager


```text
eip/MessageRouting/ProcessManager
```

```text
include('eip/MessageRouting/ProcessManager')
```



| Illustration | ProcessManager | ProcessManagerGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessageRouting/ProcessManager.png) | ![illustration for ProcessManager](../../eip/MessageRouting/ProcessManager.Local.png) | ![illustration for ProcessManagerGroup](../../eip/MessageRouting/ProcessManagerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProcessManagerXs>`
- `<$ProcessManagerSm>`
- `<$ProcessManagerMd>`
- `<$ProcessManagerLg>`





## ProcessManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ProcessManager
include('eip/MessageRouting/ProcessManager')

' renders the element
ProcessManager('ProcessManager', 'Process Manager', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ProcessManager
include('eip/MessageRouting/ProcessManager')

' renders the element
ProcessManager('ProcessManager', 'Process Manager', 'an optional tech label', 'an optional description')
@enduml
```

## ProcessManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ProcessManagerGroup
include('eip/MessageRouting/ProcessManager')

' renders the element
ProcessManagerGroup('ProcessManagerGroup', 'Process Manager Group', 'an optional tech label') {
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

' loads the Item which embeds the element ProcessManagerGroup
include('eip/MessageRouting/ProcessManager')

' renders the element
ProcessManagerGroup('ProcessManagerGroup', 'Process Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

