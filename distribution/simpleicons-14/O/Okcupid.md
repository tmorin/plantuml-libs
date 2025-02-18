# Okcupid


```text
simpleicons-14/O/Okcupid
```

```text
include('simpleicons-14/O/Okcupid')
```



| Illustration | Okcupid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Okcupid.png) | ![illustration for Okcupid](../../simpleicons-14/O/Okcupid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OkcupidXs>`
- `<$OkcupidSm>`
- `<$OkcupidMd>`
- `<$OkcupidLg>`





## Okcupid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Okcupid
include('simpleicons-14/O/Okcupid')

' renders the element
Okcupid('Okcupid', 'Okcupid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Okcupid
include('simpleicons-14/O/Okcupid')

' renders the element
Okcupid('Okcupid', 'Okcupid', 'an optional tech label', 'an optional description')
@enduml
```

