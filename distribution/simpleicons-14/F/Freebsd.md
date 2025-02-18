# Freebsd


```text
simpleicons-14/F/Freebsd
```

```text
include('simpleicons-14/F/Freebsd')
```



| Illustration | Freebsd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Freebsd.png) | ![illustration for Freebsd](../../simpleicons-14/F/Freebsd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreebsdXs>`
- `<$FreebsdSm>`
- `<$FreebsdMd>`
- `<$FreebsdLg>`





## Freebsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Freebsd
include('simpleicons-14/F/Freebsd')

' renders the element
Freebsd('Freebsd', 'Freebsd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Freebsd
include('simpleicons-14/F/Freebsd')

' renders the element
Freebsd('Freebsd', 'Freebsd', 'an optional tech label', 'an optional description')
@enduml
```

