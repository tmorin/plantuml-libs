# Netbsd


```text
simpleicons-14/N/Netbsd
```

```text
include('simpleicons-14/N/Netbsd')
```



| Illustration | Netbsd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Netbsd.png) | ![illustration for Netbsd](../../simpleicons-14/N/Netbsd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NetbsdXs>`
- `<$NetbsdSm>`
- `<$NetbsdMd>`
- `<$NetbsdLg>`





## Netbsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Netbsd
include('simpleicons-14/N/Netbsd')

' renders the element
Netbsd('Netbsd', 'Netbsd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Netbsd
include('simpleicons-14/N/Netbsd')

' renders the element
Netbsd('Netbsd', 'Netbsd', 'an optional tech label', 'an optional description')
@enduml
```

