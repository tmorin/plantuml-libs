# Logout


```text
material-4/Action/Logout
```

```text
include('material-4/Action/Logout')
```



| Illustration | Logout |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Logout.png) | ![illustration for Logout](../../material-4/Action/Logout.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LogoutXs>`
- `<$LogoutSm>`
- `<$LogoutMd>`
- `<$LogoutLg>`





## Logout

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Logout
include('material-4/Action/Logout')

' renders the element
Logout('Logout', 'Logout', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Logout
include('material-4/Action/Logout')

' renders the element
Logout('Logout', 'Logout', 'an optional tech label', 'an optional description')
@enduml
```

