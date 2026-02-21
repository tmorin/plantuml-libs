# Devbox


```text
simpleicons-14/D/Devbox
```

```text
include('simpleicons-14/D/Devbox')
```



| Illustration | Devbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Devbox.png) | ![illustration for Devbox](../../simpleicons-14/D/Devbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DevboxXs>`
- `<$DevboxSm>`
- `<$DevboxMd>`
- `<$DevboxLg>`





## Devbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Devbox
include('simpleicons-14/D/Devbox')

' renders the element
Devbox('Devbox', 'Devbox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Devbox
include('simpleicons-14/D/Devbox')

' renders the element
Devbox('Devbox', 'Devbox', 'an optional tech label', 'an optional description')
@enduml
```

