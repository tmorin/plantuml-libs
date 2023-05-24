# Fontforge


```text
simpleicons-8/F/Fontforge
```

```text
include('simpleicons-8/F/Fontforge')
```



| Illustration | Fontforge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fontforge.png) | ![illustration for Fontforge](../../simpleicons-8/F/Fontforge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FontforgeXs>`
- `<$FontforgeSm>`
- `<$FontforgeMd>`
- `<$FontforgeLg>`





## Fontforge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fontforge
include('simpleicons-8/F/Fontforge')

' renders the element
Fontforge('Fontforge', 'Fontforge', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fontforge
include('simpleicons-8/F/Fontforge')

' renders the element
Fontforge('Fontforge', 'Fontforge', 'an optional tech label', 'an optional description')
@enduml
```

