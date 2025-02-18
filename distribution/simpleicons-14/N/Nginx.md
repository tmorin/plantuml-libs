# Nginx


```text
simpleicons-14/N/Nginx
```

```text
include('simpleicons-14/N/Nginx')
```



| Illustration | Nginx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nginx.png) | ![illustration for Nginx](../../simpleicons-14/N/Nginx.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nginx
include('simpleicons-14/N/Nginx')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nginx
include('simpleicons-14/N/Nginx')

' renders the element
Nginx('Nginx', 'Nginx', 'an optional tech label', 'an optional description')
@enduml
```

