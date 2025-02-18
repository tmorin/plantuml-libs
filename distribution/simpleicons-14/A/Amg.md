# Amg


```text
simpleicons-14/A/Amg
```

```text
include('simpleicons-14/A/Amg')
```



| Illustration | Amg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Amg.png) | ![illustration for Amg](../../simpleicons-14/A/Amg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmgXs>`
- `<$AmgSm>`
- `<$AmgMd>`
- `<$AmgLg>`





## Amg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amg
include('simpleicons-14/A/Amg')

' renders the element
Amg('Amg', 'Amg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amg
include('simpleicons-14/A/Amg')

' renders the element
Amg('Amg', 'Amg', 'an optional tech label', 'an optional description')
@enduml
```

