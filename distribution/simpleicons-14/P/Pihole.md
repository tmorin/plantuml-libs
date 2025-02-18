# Pihole


```text
simpleicons-14/P/Pihole
```

```text
include('simpleicons-14/P/Pihole')
```



| Illustration | Pihole |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pihole.png) | ![illustration for Pihole](../../simpleicons-14/P/Pihole.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PiholeXs>`
- `<$PiholeSm>`
- `<$PiholeMd>`
- `<$PiholeLg>`





## Pihole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pihole
include('simpleicons-14/P/Pihole')

' renders the element
Pihole('Pihole', 'Pihole', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pihole
include('simpleicons-14/P/Pihole')

' renders the element
Pihole('Pihole', 'Pihole', 'an optional tech label', 'an optional description')
@enduml
```

