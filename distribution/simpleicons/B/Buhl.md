# Buhl


```text
simpleicons/B/Buhl
```

```text
include('simpleicons/B/Buhl')
```



| Illustration | Buhl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Buhl.png) | ![illustration for Buhl](../../simpleicons/B/Buhl.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Buhl
include('simpleicons/B/Buhl')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Buhl
include('simpleicons/B/Buhl')

' renders the element
Buhl('Buhl', 'Buhl', 'an optional tech label', 'an optional description')
@enduml
```

