# Hatenabookmark


```text
simpleicons-14/H/Hatenabookmark
```

```text
include('simpleicons-14/H/Hatenabookmark')
```



| Illustration | Hatenabookmark |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hatenabookmark.png) | ![illustration for Hatenabookmark](../../simpleicons-14/H/Hatenabookmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HatenabookmarkXs>`
- `<$HatenabookmarkSm>`
- `<$HatenabookmarkMd>`
- `<$HatenabookmarkLg>`





## Hatenabookmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hatenabookmark
include('simpleicons-14/H/Hatenabookmark')

' renders the element
Hatenabookmark('Hatenabookmark', 'Hatenabookmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hatenabookmark
include('simpleicons-14/H/Hatenabookmark')

' renders the element
Hatenabookmark('Hatenabookmark', 'Hatenabookmark', 'an optional tech label', 'an optional description')
@enduml
```

