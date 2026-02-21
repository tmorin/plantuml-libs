# Ntfy


```text
simpleicons-14/N/Ntfy
```

```text
include('simpleicons-14/N/Ntfy')
```



| Illustration | Ntfy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Ntfy.png) | ![illustration for Ntfy](../../simpleicons-14/N/Ntfy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NtfyXs>`
- `<$NtfySm>`
- `<$NtfyMd>`
- `<$NtfyLg>`





## Ntfy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ntfy
include('simpleicons-14/N/Ntfy')

' renders the element
Ntfy('Ntfy', 'Ntfy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ntfy
include('simpleicons-14/N/Ntfy')

' renders the element
Ntfy('Ntfy', 'Ntfy', 'an optional tech label', 'an optional description')
@enduml
```

