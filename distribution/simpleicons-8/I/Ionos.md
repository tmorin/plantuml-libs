# Ionos


```text
simpleicons-8/I/Ionos
```

```text
include('simpleicons-8/I/Ionos')
```



| Illustration | Ionos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Ionos.png) | ![illustration for Ionos](../../simpleicons-8/I/Ionos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IonosXs>`
- `<$IonosSm>`
- `<$IonosMd>`
- `<$IonosLg>`





## Ionos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ionos
include('simpleicons-8/I/Ionos')

' renders the element
Ionos('Ionos', 'Ionos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ionos
include('simpleicons-8/I/Ionos')

' renders the element
Ionos('Ionos', 'Ionos', 'an optional tech label', 'an optional description')
@enduml
```

