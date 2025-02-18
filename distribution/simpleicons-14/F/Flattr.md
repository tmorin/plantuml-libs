# Flattr


```text
simpleicons-14/F/Flattr
```

```text
include('simpleicons-14/F/Flattr')
```



| Illustration | Flattr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Flattr.png) | ![illustration for Flattr](../../simpleicons-14/F/Flattr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlattrXs>`
- `<$FlattrSm>`
- `<$FlattrMd>`
- `<$FlattrLg>`





## Flattr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Flattr
include('simpleicons-14/F/Flattr')

' renders the element
Flattr('Flattr', 'Flattr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flattr
include('simpleicons-14/F/Flattr')

' renders the element
Flattr('Flattr', 'Flattr', 'an optional tech label', 'an optional description')
@enduml
```

