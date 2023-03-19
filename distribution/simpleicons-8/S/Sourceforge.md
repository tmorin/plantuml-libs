# Sourceforge


```text
simpleicons-8/S/Sourceforge
```

```text
include('simpleicons-8/S/Sourceforge')
```



| Illustration | Sourceforge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sourceforge.png) | ![illustration for Sourceforge](../../simpleicons-8/S/Sourceforge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SourceforgeXs>`
- `<$SourceforgeSm>`
- `<$SourceforgeMd>`
- `<$SourceforgeLg>`





## Sourceforge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sourceforge
include('simpleicons-8/S/Sourceforge')

' renders the element
Sourceforge('Sourceforge', 'Sourceforge', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sourceforge
include('simpleicons-8/S/Sourceforge')

' renders the element
Sourceforge('Sourceforge', 'Sourceforge', 'an optional tech label', 'an optional description')
@enduml
```

