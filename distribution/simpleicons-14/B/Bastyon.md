# Bastyon


```text
simpleicons-14/B/Bastyon
```

```text
include('simpleicons-14/B/Bastyon')
```



| Illustration | Bastyon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bastyon.png) | ![illustration for Bastyon](../../simpleicons-14/B/Bastyon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BastyonXs>`
- `<$BastyonSm>`
- `<$BastyonMd>`
- `<$BastyonLg>`





## Bastyon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bastyon
include('simpleicons-14/B/Bastyon')

' renders the element
Bastyon('Bastyon', 'Bastyon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bastyon
include('simpleicons-14/B/Bastyon')

' renders the element
Bastyon('Bastyon', 'Bastyon', 'an optional tech label', 'an optional description')
@enduml
```

