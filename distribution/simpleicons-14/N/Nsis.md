# Nsis


```text
simpleicons-14/N/Nsis
```

```text
include('simpleicons-14/N/Nsis')
```



| Illustration | Nsis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nsis.png) | ![illustration for Nsis](../../simpleicons-14/N/Nsis.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NsisXs>`
- `<$NsisSm>`
- `<$NsisMd>`
- `<$NsisLg>`





## Nsis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nsis
include('simpleicons-14/N/Nsis')

' renders the element
Nsis('Nsis', 'Nsis', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nsis
include('simpleicons-14/N/Nsis')

' renders the element
Nsis('Nsis', 'Nsis', 'an optional tech label', 'an optional description')
@enduml
```

