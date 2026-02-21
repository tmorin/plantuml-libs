# Linuxserver


```text
simpleicons/L/Linuxserver
```

```text
include('simpleicons/L/Linuxserver')
```



| Illustration | Linuxserver |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Linuxserver.png) | ![illustration for Linuxserver](../../simpleicons/L/Linuxserver.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinuxserverXs>`
- `<$LinuxserverSm>`
- `<$LinuxserverMd>`
- `<$LinuxserverLg>`





## Linuxserver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Linuxserver
include('simpleicons/L/Linuxserver')

' renders the element
Linuxserver('Linuxserver', 'Linuxserver', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Linuxserver
include('simpleicons/L/Linuxserver')

' renders the element
Linuxserver('Linuxserver', 'Linuxserver', 'an optional tech label', 'an optional description')
@enduml
```

