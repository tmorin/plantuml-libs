# Squarespace


```text
simpleicons-8/S/Squarespace
```

```text
include('simpleicons-8/S/Squarespace')
```



| Illustration | Squarespace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Squarespace.png) | ![illustration for Squarespace](../../simpleicons-8/S/Squarespace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquarespaceXs>`
- `<$SquarespaceSm>`
- `<$SquarespaceMd>`
- `<$SquarespaceLg>`





## Squarespace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Squarespace
include('simpleicons-8/S/Squarespace')

' renders the element
Squarespace('Squarespace', 'Squarespace', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Squarespace
include('simpleicons-8/S/Squarespace')

' renders the element
Squarespace('Squarespace', 'Squarespace', 'an optional tech label', 'an optional description')
@enduml
```

