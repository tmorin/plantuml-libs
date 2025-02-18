# Ikea


```text
simpleicons-14/I/Ikea
```

```text
include('simpleicons-14/I/Ikea')
```



| Illustration | Ikea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Ikea.png) | ![illustration for Ikea](../../simpleicons-14/I/Ikea.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IkeaXs>`
- `<$IkeaSm>`
- `<$IkeaMd>`
- `<$IkeaLg>`





## Ikea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ikea
include('simpleicons-14/I/Ikea')

' renders the element
Ikea('Ikea', 'Ikea', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ikea
include('simpleicons-14/I/Ikea')

' renders the element
Ikea('Ikea', 'Ikea', 'an optional tech label', 'an optional description')
@enduml
```

