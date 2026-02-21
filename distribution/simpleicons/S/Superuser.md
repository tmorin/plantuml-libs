# Superuser


```text
simpleicons/S/Superuser
```

```text
include('simpleicons/S/Superuser')
```



| Illustration | Superuser |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Superuser.png) | ![illustration for Superuser](../../simpleicons/S/Superuser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SuperuserXs>`
- `<$SuperuserSm>`
- `<$SuperuserMd>`
- `<$SuperuserLg>`





## Superuser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Superuser
include('simpleicons/S/Superuser')

' renders the element
Superuser('Superuser', 'Superuser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Superuser
include('simpleicons/S/Superuser')

' renders the element
Superuser('Superuser', 'Superuser', 'an optional tech label', 'an optional description')
@enduml
```

