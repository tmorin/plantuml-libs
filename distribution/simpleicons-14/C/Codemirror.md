# Codemirror


```text
simpleicons-14/C/Codemirror
```

```text
include('simpleicons-14/C/Codemirror')
```



| Illustration | Codemirror |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Codemirror.png) | ![illustration for Codemirror](../../simpleicons-14/C/Codemirror.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodemirrorXs>`
- `<$CodemirrorSm>`
- `<$CodemirrorMd>`
- `<$CodemirrorLg>`





## Codemirror

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codemirror
include('simpleicons-14/C/Codemirror')

' renders the element
Codemirror('Codemirror', 'Codemirror', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codemirror
include('simpleicons-14/C/Codemirror')

' renders the element
Codemirror('Codemirror', 'Codemirror', 'an optional tech label', 'an optional description')
@enduml
```

