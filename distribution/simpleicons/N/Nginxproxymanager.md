# Nginxproxymanager


```text
simpleicons/N/Nginxproxymanager
```

```text
include('simpleicons/N/Nginxproxymanager')
```



| Illustration | Nginxproxymanager |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nginxproxymanager.png) | ![illustration for Nginxproxymanager](../../simpleicons/N/Nginxproxymanager.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NginxproxymanagerXs>`
- `<$NginxproxymanagerSm>`
- `<$NginxproxymanagerMd>`
- `<$NginxproxymanagerLg>`





## Nginxproxymanager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nginxproxymanager
include('simpleicons/N/Nginxproxymanager')

' renders the element
Nginxproxymanager('Nginxproxymanager', 'Nginxproxymanager', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nginxproxymanager
include('simpleicons/N/Nginxproxymanager')

' renders the element
Nginxproxymanager('Nginxproxymanager', 'Nginxproxymanager', 'an optional tech label', 'an optional description')
@enduml
```

