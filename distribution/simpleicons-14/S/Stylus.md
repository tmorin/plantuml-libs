# Stylus


```text
simpleicons-14/S/Stylus
```

```text
include('simpleicons-14/S/Stylus')
```



| Illustration | Stylus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Stylus.png) | ![illustration for Stylus](../../simpleicons-14/S/Stylus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StylusXs>`
- `<$StylusSm>`
- `<$StylusMd>`
- `<$StylusLg>`





## Stylus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Stylus
include('simpleicons-14/S/Stylus')

' renders the element
Stylus('Stylus', 'Stylus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stylus
include('simpleicons-14/S/Stylus')

' renders the element
Stylus('Stylus', 'Stylus', 'an optional tech label', 'an optional description')
@enduml
```

