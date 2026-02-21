# Yunohost


```text
simpleicons-14/Y/Yunohost
```

```text
include('simpleicons-14/Y/Yunohost')
```



| Illustration | Yunohost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Yunohost.png) | ![illustration for Yunohost](../../simpleicons-14/Y/Yunohost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YunohostXs>`
- `<$YunohostSm>`
- `<$YunohostMd>`
- `<$YunohostLg>`





## Yunohost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Yunohost
include('simpleicons-14/Y/Yunohost')

' renders the element
Yunohost('Yunohost', 'Yunohost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yunohost
include('simpleicons-14/Y/Yunohost')

' renders the element
Yunohost('Yunohost', 'Yunohost', 'an optional tech label', 'an optional description')
@enduml
```

