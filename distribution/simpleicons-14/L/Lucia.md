# Lucia


```text
simpleicons-14/L/Lucia
```

```text
include('simpleicons-14/L/Lucia')
```



| Illustration | Lucia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lucia.png) | ![illustration for Lucia](../../simpleicons-14/L/Lucia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LuciaXs>`
- `<$LuciaSm>`
- `<$LuciaMd>`
- `<$LuciaLg>`





## Lucia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lucia
include('simpleicons-14/L/Lucia')

' renders the element
Lucia('Lucia', 'Lucia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lucia
include('simpleicons-14/L/Lucia')

' renders the element
Lucia('Lucia', 'Lucia', 'an optional tech label', 'an optional description')
@enduml
```

