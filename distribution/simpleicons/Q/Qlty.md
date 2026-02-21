# Qlty


```text
simpleicons/Q/Qlty
```

```text
include('simpleicons/Q/Qlty')
```



| Illustration | Qlty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Qlty.png) | ![illustration for Qlty](../../simpleicons/Q/Qlty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QltyXs>`
- `<$QltySm>`
- `<$QltyMd>`
- `<$QltyLg>`





## Qlty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qlty
include('simpleicons/Q/Qlty')

' renders the element
Qlty('Qlty', 'Qlty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qlty
include('simpleicons/Q/Qlty')

' renders the element
Qlty('Qlty', 'Qlty', 'an optional tech label', 'an optional description')
@enduml
```

