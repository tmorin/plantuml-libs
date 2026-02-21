# Inertia


```text
simpleicons-14/I/Inertia
```

```text
include('simpleicons-14/I/Inertia')
```



| Illustration | Inertia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Inertia.png) | ![illustration for Inertia](../../simpleicons-14/I/Inertia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InertiaXs>`
- `<$InertiaSm>`
- `<$InertiaMd>`
- `<$InertiaLg>`





## Inertia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Inertia
include('simpleicons-14/I/Inertia')

' renders the element
Inertia('Inertia', 'Inertia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Inertia
include('simpleicons-14/I/Inertia')

' renders the element
Inertia('Inertia', 'Inertia', 'an optional tech label', 'an optional description')
@enduml
```

