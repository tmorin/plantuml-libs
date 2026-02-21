# Notebooklm


```text
simpleicons-14/N/Notebooklm
```

```text
include('simpleicons-14/N/Notebooklm')
```



| Illustration | Notebooklm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Notebooklm.png) | ![illustration for Notebooklm](../../simpleicons-14/N/Notebooklm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotebooklmXs>`
- `<$NotebooklmSm>`
- `<$NotebooklmMd>`
- `<$NotebooklmLg>`





## Notebooklm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Notebooklm
include('simpleicons-14/N/Notebooklm')

' renders the element
Notebooklm('Notebooklm', 'Notebooklm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Notebooklm
include('simpleicons-14/N/Notebooklm')

' renders the element
Notebooklm('Notebooklm', 'Notebooklm', 'an optional tech label', 'an optional description')
@enduml
```

