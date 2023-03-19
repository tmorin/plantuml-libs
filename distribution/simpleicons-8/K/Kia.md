# Kia


```text
simpleicons-8/K/Kia
```

```text
include('simpleicons-8/K/Kia')
```



| Illustration | Kia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Kia.png) | ![illustration for Kia](../../simpleicons-8/K/Kia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KiaXs>`
- `<$KiaSm>`
- `<$KiaMd>`
- `<$KiaLg>`





## Kia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kia
include('simpleicons-8/K/Kia')

' renders the element
Kia('Kia', 'Kia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kia
include('simpleicons-8/K/Kia')

' renders the element
Kia('Kia', 'Kia', 'an optional tech label', 'an optional description')
@enduml
```

