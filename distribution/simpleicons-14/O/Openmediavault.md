# Openmediavault


```text
simpleicons-14/O/Openmediavault
```

```text
include('simpleicons-14/O/Openmediavault')
```



| Illustration | Openmediavault |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Openmediavault.png) | ![illustration for Openmediavault](../../simpleicons-14/O/Openmediavault.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenmediavaultXs>`
- `<$OpenmediavaultSm>`
- `<$OpenmediavaultMd>`
- `<$OpenmediavaultLg>`





## Openmediavault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Openmediavault
include('simpleicons-14/O/Openmediavault')

' renders the element
Openmediavault('Openmediavault', 'Openmediavault', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Openmediavault
include('simpleicons-14/O/Openmediavault')

' renders the element
Openmediavault('Openmediavault', 'Openmediavault', 'an optional tech label', 'an optional description')
@enduml
```

