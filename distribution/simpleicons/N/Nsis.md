# Nsis


```text
simpleicons/N/Nsis
```

```text
include('simpleicons/N/Nsis')
```



| Illustration | Nsis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nsis.png) | ![illustration for Nsis](../../simpleicons/N/Nsis.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nsis
include('simpleicons/N/Nsis')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nsis
include('simpleicons/N/Nsis')

' renders the element
Nsis('Nsis', 'Nsis', 'an optional tech label', 'an optional description')
@enduml
```

