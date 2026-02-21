# Coreldraw


```text
simpleicons-14/C/Coreldraw
```

```text
include('simpleicons-14/C/Coreldraw')
```



| Illustration | Coreldraw |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Coreldraw.png) | ![illustration for Coreldraw](../../simpleicons-14/C/Coreldraw.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoreldrawXs>`
- `<$CoreldrawSm>`
- `<$CoreldrawMd>`
- `<$CoreldrawLg>`





## Coreldraw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coreldraw
include('simpleicons-14/C/Coreldraw')

' renders the element
Coreldraw('Coreldraw', 'Coreldraw', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coreldraw
include('simpleicons-14/C/Coreldraw')

' renders the element
Coreldraw('Coreldraw', 'Coreldraw', 'an optional tech label', 'an optional description')
@enduml
```

