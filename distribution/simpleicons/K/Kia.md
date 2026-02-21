# Kia


```text
simpleicons/K/Kia
```

```text
include('simpleicons/K/Kia')
```



| Illustration | Kia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kia.png) | ![illustration for Kia](../../simpleicons/K/Kia.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kia
include('simpleicons/K/Kia')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kia
include('simpleicons/K/Kia')

' renders the element
Kia('Kia', 'Kia', 'an optional tech label', 'an optional description')
@enduml
```

