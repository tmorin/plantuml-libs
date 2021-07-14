# Nginx


```text
simpleicons-5/N/Nginx
```

```text
include('simpleicons-5/N/Nginx')
```



| Illustration | Nginx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nginx.png) | ![illustration for Nginx](../../simpleicons-5/N/Nginx.Local.png) |




## Nginx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nginx
include('simpleicons-5/N/Nginx')

' renders the element
Nginx('Nginx', 'Nginx', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nginx
include('simpleicons-5/N/Nginx')

' renders the element
Nginx('Nginx', 'Nginx', 'an optional tech label')
@enduml
```

