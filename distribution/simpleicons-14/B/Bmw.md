# Bmw


```text
simpleicons-14/B/Bmw
```

```text
include('simpleicons-14/B/Bmw')
```



| Illustration | Bmw |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bmw.png) | ![illustration for Bmw](../../simpleicons-14/B/Bmw.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BmwXs>`
- `<$BmwSm>`
- `<$BmwMd>`
- `<$BmwLg>`





## Bmw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bmw
include('simpleicons-14/B/Bmw')

' renders the element
Bmw('Bmw', 'Bmw', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bmw
include('simpleicons-14/B/Bmw')

' renders the element
Bmw('Bmw', 'Bmw', 'an optional tech label', 'an optional description')
@enduml
```

