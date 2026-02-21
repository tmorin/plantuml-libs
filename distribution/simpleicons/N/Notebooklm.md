# Notebooklm


```text
simpleicons/N/Notebooklm
```

```text
include('simpleicons/N/Notebooklm')
```



| Illustration | Notebooklm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Notebooklm.png) | ![illustration for Notebooklm](../../simpleicons/N/Notebooklm.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Notebooklm
include('simpleicons/N/Notebooklm')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Notebooklm
include('simpleicons/N/Notebooklm')

' renders the element
Notebooklm('Notebooklm', 'Notebooklm', 'an optional tech label', 'an optional description')
@enduml
```

