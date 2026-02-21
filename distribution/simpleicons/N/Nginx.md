# Nginx


```text
simpleicons/N/Nginx
```

```text
include('simpleicons/N/Nginx')
```



| Illustration | Nginx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nginx.png) | ![illustration for Nginx](../../simpleicons/N/Nginx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NginxXs>`
- `<$NginxSm>`
- `<$NginxMd>`
- `<$NginxLg>`





## Nginx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nginx
include('simpleicons/N/Nginx')

' renders the element
Nginx('Nginx', 'Nginx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nginx
include('simpleicons/N/Nginx')

' renders the element
Nginx('Nginx', 'Nginx', 'an optional tech label', 'an optional description')
@enduml
```

