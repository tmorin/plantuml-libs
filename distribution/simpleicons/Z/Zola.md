# Zola


```text
simpleicons/Z/Zola
```

```text
include('simpleicons/Z/Zola')
```



| Illustration | Zola |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zola.png) | ![illustration for Zola](../../simpleicons/Z/Zola.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zola
include('simpleicons/Z/Zola')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zola
include('simpleicons/Z/Zola')

' renders the element
Zola('Zola', 'Zola', 'an optional tech label', 'an optional description')
@enduml
```

