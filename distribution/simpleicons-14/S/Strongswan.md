# Strongswan


```text
simpleicons-14/S/Strongswan
```

```text
include('simpleicons-14/S/Strongswan')
```



| Illustration | Strongswan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Strongswan.png) | ![illustration for Strongswan](../../simpleicons-14/S/Strongswan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StrongswanXs>`
- `<$StrongswanSm>`
- `<$StrongswanMd>`
- `<$StrongswanLg>`





## Strongswan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Strongswan
include('simpleicons-14/S/Strongswan')

' renders the element
Strongswan('Strongswan', 'Strongswan', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Strongswan
include('simpleicons-14/S/Strongswan')

' renders the element
Strongswan('Strongswan', 'Strongswan', 'an optional tech label', 'an optional description')
@enduml
```

