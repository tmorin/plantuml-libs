# Microeditor


```text
simpleicons-14/M/Microeditor
```

```text
include('simpleicons-14/M/Microeditor')
```



| Illustration | Microeditor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Microeditor.png) | ![illustration for Microeditor](../../simpleicons-14/M/Microeditor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicroeditorXs>`
- `<$MicroeditorSm>`
- `<$MicroeditorMd>`
- `<$MicroeditorLg>`





## Microeditor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Microeditor
include('simpleicons-14/M/Microeditor')

' renders the element
Microeditor('Microeditor', 'Microeditor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microeditor
include('simpleicons-14/M/Microeditor')

' renders the element
Microeditor('Microeditor', 'Microeditor', 'an optional tech label', 'an optional description')
@enduml
```

