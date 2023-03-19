# Triller


```text
simpleicons-8/T/Triller
```

```text
include('simpleicons-8/T/Triller')
```



| Illustration | Triller |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Triller.png) | ![illustration for Triller](../../simpleicons-8/T/Triller.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrillerXs>`
- `<$TrillerSm>`
- `<$TrillerMd>`
- `<$TrillerLg>`





## Triller

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Triller
include('simpleicons-8/T/Triller')

' renders the element
Triller('Triller', 'Triller', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Triller
include('simpleicons-8/T/Triller')

' renders the element
Triller('Triller', 'Triller', 'an optional tech label', 'an optional description')
@enduml
```

