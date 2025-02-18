# Godaddy


```text
simpleicons-14/G/Godaddy
```

```text
include('simpleicons-14/G/Godaddy')
```



| Illustration | Godaddy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Godaddy.png) | ![illustration for Godaddy](../../simpleicons-14/G/Godaddy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GodaddyXs>`
- `<$GodaddySm>`
- `<$GodaddyMd>`
- `<$GodaddyLg>`





## Godaddy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Godaddy
include('simpleicons-14/G/Godaddy')

' renders the element
Godaddy('Godaddy', 'Godaddy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Godaddy
include('simpleicons-14/G/Godaddy')

' renders the element
Godaddy('Godaddy', 'Godaddy', 'an optional tech label', 'an optional description')
@enduml
```

