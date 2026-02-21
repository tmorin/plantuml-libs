# Ecosia


```text
simpleicons-14/E/Ecosia
```

```text
include('simpleicons-14/E/Ecosia')
```



| Illustration | Ecosia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Ecosia.png) | ![illustration for Ecosia](../../simpleicons-14/E/Ecosia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EcosiaXs>`
- `<$EcosiaSm>`
- `<$EcosiaMd>`
- `<$EcosiaLg>`





## Ecosia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ecosia
include('simpleicons-14/E/Ecosia')

' renders the element
Ecosia('Ecosia', 'Ecosia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ecosia
include('simpleicons-14/E/Ecosia')

' renders the element
Ecosia('Ecosia', 'Ecosia', 'an optional tech label', 'an optional description')
@enduml
```

