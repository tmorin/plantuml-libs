# Hitachi


```text
simpleicons-14/H/Hitachi
```

```text
include('simpleicons-14/H/Hitachi')
```



| Illustration | Hitachi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hitachi.png) | ![illustration for Hitachi](../../simpleicons-14/H/Hitachi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HitachiXs>`
- `<$HitachiSm>`
- `<$HitachiMd>`
- `<$HitachiLg>`





## Hitachi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hitachi
include('simpleicons-14/H/Hitachi')

' renders the element
Hitachi('Hitachi', 'Hitachi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hitachi
include('simpleicons-14/H/Hitachi')

' renders the element
Hitachi('Hitachi', 'Hitachi', 'an optional tech label', 'an optional description')
@enduml
```

