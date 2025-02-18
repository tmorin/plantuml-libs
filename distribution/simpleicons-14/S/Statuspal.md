# Statuspal


```text
simpleicons-14/S/Statuspal
```

```text
include('simpleicons-14/S/Statuspal')
```



| Illustration | Statuspal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Statuspal.png) | ![illustration for Statuspal](../../simpleicons-14/S/Statuspal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StatuspalXs>`
- `<$StatuspalSm>`
- `<$StatuspalMd>`
- `<$StatuspalLg>`





## Statuspal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Statuspal
include('simpleicons-14/S/Statuspal')

' renders the element
Statuspal('Statuspal', 'Statuspal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Statuspal
include('simpleicons-14/S/Statuspal')

' renders the element
Statuspal('Statuspal', 'Statuspal', 'an optional tech label', 'an optional description')
@enduml
```

