# Zola


```text
simpleicons-14/Z/Zola
```

```text
include('simpleicons-14/Z/Zola')
```



| Illustration | Zola |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zola.png) | ![illustration for Zola](../../simpleicons-14/Z/Zola.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZolaXs>`
- `<$ZolaSm>`
- `<$ZolaMd>`
- `<$ZolaLg>`





## Zola

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zola
include('simpleicons-14/Z/Zola')

' renders the element
Zola('Zola', 'Zola', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zola
include('simpleicons-14/Z/Zola')

' renders the element
Zola('Zola', 'Zola', 'an optional tech label', 'an optional description')
@enduml
```

