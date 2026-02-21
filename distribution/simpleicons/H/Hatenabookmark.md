# Hatenabookmark


```text
simpleicons/H/Hatenabookmark
```

```text
include('simpleicons/H/Hatenabookmark')
```



| Illustration | Hatenabookmark |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hatenabookmark.png) | ![illustration for Hatenabookmark](../../simpleicons/H/Hatenabookmark.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hatenabookmark
include('simpleicons/H/Hatenabookmark')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hatenabookmark
include('simpleicons/H/Hatenabookmark')

' renders the element
Hatenabookmark('Hatenabookmark', 'Hatenabookmark', 'an optional tech label', 'an optional description')
@enduml
```

