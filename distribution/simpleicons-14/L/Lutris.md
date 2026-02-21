# Lutris


```text
simpleicons-14/L/Lutris
```

```text
include('simpleicons-14/L/Lutris')
```



| Illustration | Lutris |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lutris.png) | ![illustration for Lutris](../../simpleicons-14/L/Lutris.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LutrisXs>`
- `<$LutrisSm>`
- `<$LutrisMd>`
- `<$LutrisLg>`





## Lutris

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lutris
include('simpleicons-14/L/Lutris')

' renders the element
Lutris('Lutris', 'Lutris', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lutris
include('simpleicons-14/L/Lutris')

' renders the element
Lutris('Lutris', 'Lutris', 'an optional tech label', 'an optional description')
@enduml
```

