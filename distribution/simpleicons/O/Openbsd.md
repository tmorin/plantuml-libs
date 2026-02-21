# Openbsd


```text
simpleicons/O/Openbsd
```

```text
include('simpleicons/O/Openbsd')
```



| Illustration | Openbsd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openbsd.png) | ![illustration for Openbsd](../../simpleicons/O/Openbsd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenbsdXs>`
- `<$OpenbsdSm>`
- `<$OpenbsdMd>`
- `<$OpenbsdLg>`





## Openbsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openbsd
include('simpleicons/O/Openbsd')

' renders the element
Openbsd('Openbsd', 'Openbsd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openbsd
include('simpleicons/O/Openbsd')

' renders the element
Openbsd('Openbsd', 'Openbsd', 'an optional tech label', 'an optional description')
@enduml
```

