# Husqvarna


```text
simpleicons-14/H/Husqvarna
```

```text
include('simpleicons-14/H/Husqvarna')
```



| Illustration | Husqvarna |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Husqvarna.png) | ![illustration for Husqvarna](../../simpleicons-14/H/Husqvarna.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HusqvarnaXs>`
- `<$HusqvarnaSm>`
- `<$HusqvarnaMd>`
- `<$HusqvarnaLg>`





## Husqvarna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Husqvarna
include('simpleicons-14/H/Husqvarna')

' renders the element
Husqvarna('Husqvarna', 'Husqvarna', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Husqvarna
include('simpleicons-14/H/Husqvarna')

' renders the element
Husqvarna('Husqvarna', 'Husqvarna', 'an optional tech label', 'an optional description')
@enduml
```

