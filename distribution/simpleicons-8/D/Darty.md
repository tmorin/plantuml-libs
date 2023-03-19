# Darty


```text
simpleicons-8/D/Darty
```

```text
include('simpleicons-8/D/Darty')
```



| Illustration | Darty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Darty.png) | ![illustration for Darty](../../simpleicons-8/D/Darty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DartyXs>`
- `<$DartySm>`
- `<$DartyMd>`
- `<$DartyLg>`





## Darty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Darty
include('simpleicons-8/D/Darty')

' renders the element
Darty('Darty', 'Darty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Darty
include('simpleicons-8/D/Darty')

' renders the element
Darty('Darty', 'Darty', 'an optional tech label', 'an optional description')
@enduml
```

