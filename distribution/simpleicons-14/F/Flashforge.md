# Flashforge


```text
simpleicons-14/F/Flashforge
```

```text
include('simpleicons-14/F/Flashforge')
```



| Illustration | Flashforge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Flashforge.png) | ![illustration for Flashforge](../../simpleicons-14/F/Flashforge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlashforgeXs>`
- `<$FlashforgeSm>`
- `<$FlashforgeMd>`
- `<$FlashforgeLg>`





## Flashforge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Flashforge
include('simpleicons-14/F/Flashforge')

' renders the element
Flashforge('Flashforge', 'Flashforge', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flashforge
include('simpleicons-14/F/Flashforge')

' renders the element
Flashforge('Flashforge', 'Flashforge', 'an optional tech label', 'an optional description')
@enduml
```

