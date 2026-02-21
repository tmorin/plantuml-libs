# Astra


```text
simpleicons-14/A/Astra
```

```text
include('simpleicons-14/A/Astra')
```



| Illustration | Astra |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Astra.png) | ![illustration for Astra](../../simpleicons-14/A/Astra.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AstraXs>`
- `<$AstraSm>`
- `<$AstraMd>`
- `<$AstraLg>`





## Astra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Astra
include('simpleicons-14/A/Astra')

' renders the element
Astra('Astra', 'Astra', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Astra
include('simpleicons-14/A/Astra')

' renders the element
Astra('Astra', 'Astra', 'an optional tech label', 'an optional description')
@enduml
```

