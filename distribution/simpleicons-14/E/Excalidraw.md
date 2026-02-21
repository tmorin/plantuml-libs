# Excalidraw


```text
simpleicons-14/E/Excalidraw
```

```text
include('simpleicons-14/E/Excalidraw')
```



| Illustration | Excalidraw |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Excalidraw.png) | ![illustration for Excalidraw](../../simpleicons-14/E/Excalidraw.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExcalidrawXs>`
- `<$ExcalidrawSm>`
- `<$ExcalidrawMd>`
- `<$ExcalidrawLg>`





## Excalidraw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Excalidraw
include('simpleicons-14/E/Excalidraw')

' renders the element
Excalidraw('Excalidraw', 'Excalidraw', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Excalidraw
include('simpleicons-14/E/Excalidraw')

' renders the element
Excalidraw('Excalidraw', 'Excalidraw', 'an optional tech label', 'an optional description')
@enduml
```

