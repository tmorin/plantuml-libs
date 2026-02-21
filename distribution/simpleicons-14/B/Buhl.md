# Buhl


```text
simpleicons-14/B/Buhl
```

```text
include('simpleicons-14/B/Buhl')
```



| Illustration | Buhl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Buhl.png) | ![illustration for Buhl](../../simpleicons-14/B/Buhl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuhlXs>`
- `<$BuhlSm>`
- `<$BuhlMd>`
- `<$BuhlLg>`





## Buhl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Buhl
include('simpleicons-14/B/Buhl')

' renders the element
Buhl('Buhl', 'Buhl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Buhl
include('simpleicons-14/B/Buhl')

' renders the element
Buhl('Buhl', 'Buhl', 'an optional tech label', 'an optional description')
@enduml
```

