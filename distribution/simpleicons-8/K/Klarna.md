# Klarna


```text
simpleicons-8/K/Klarna
```

```text
include('simpleicons-8/K/Klarna')
```



| Illustration | Klarna |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Klarna.png) | ![illustration for Klarna](../../simpleicons-8/K/Klarna.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KlarnaXs>`
- `<$KlarnaSm>`
- `<$KlarnaMd>`
- `<$KlarnaLg>`





## Klarna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Klarna
include('simpleicons-8/K/Klarna')

' renders the element
Klarna('Klarna', 'Klarna', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Klarna
include('simpleicons-8/K/Klarna')

' renders the element
Klarna('Klarna', 'Klarna', 'an optional tech label', 'an optional description')
@enduml
```

