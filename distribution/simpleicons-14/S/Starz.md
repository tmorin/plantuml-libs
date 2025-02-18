# Starz


```text
simpleicons-14/S/Starz
```

```text
include('simpleicons-14/S/Starz')
```



| Illustration | Starz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Starz.png) | ![illustration for Starz](../../simpleicons-14/S/Starz.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarzXs>`
- `<$StarzSm>`
- `<$StarzMd>`
- `<$StarzLg>`





## Starz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Starz
include('simpleicons-14/S/Starz')

' renders the element
Starz('Starz', 'Starz', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Starz
include('simpleicons-14/S/Starz')

' renders the element
Starz('Starz', 'Starz', 'an optional tech label', 'an optional description')
@enduml
```

