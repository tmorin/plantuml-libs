# Bsd


```text
simpleicons-14/B/Bsd
```

```text
include('simpleicons-14/B/Bsd')
```



| Illustration | Bsd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bsd.png) | ![illustration for Bsd](../../simpleicons-14/B/Bsd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BsdXs>`
- `<$BsdSm>`
- `<$BsdMd>`
- `<$BsdLg>`





## Bsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bsd
include('simpleicons-14/B/Bsd')

' renders the element
Bsd('Bsd', 'Bsd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bsd
include('simpleicons-14/B/Bsd')

' renders the element
Bsd('Bsd', 'Bsd', 'an optional tech label', 'an optional description')
@enduml
```

