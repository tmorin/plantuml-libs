# Nginx


```text
simpleicons-6/N/Nginx
```

```text
include('simpleicons-6/N/Nginx')
```



| Illustration | Nginx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nginx.png) | ![illustration for Nginx](../../simpleicons-6/N/Nginx.Local.png) |




## Nginx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nginx
include('simpleicons-6/N/Nginx')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nginx
include('simpleicons-6/N/Nginx')

' renders the element
Nginx('Nginx', 'Nginx', 'an optional tech label')
@enduml
```

