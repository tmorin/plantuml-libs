# Pointy


```text
simpleicons-14/P/Pointy
```

```text
include('simpleicons-14/P/Pointy')
```



| Illustration | Pointy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pointy.png) | ![illustration for Pointy](../../simpleicons-14/P/Pointy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PointyXs>`
- `<$PointySm>`
- `<$PointyMd>`
- `<$PointyLg>`





## Pointy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pointy
include('simpleicons-14/P/Pointy')

' renders the element
Pointy('Pointy', 'Pointy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pointy
include('simpleicons-14/P/Pointy')

' renders the element
Pointy('Pointy', 'Pointy', 'an optional tech label', 'an optional description')
@enduml
```

