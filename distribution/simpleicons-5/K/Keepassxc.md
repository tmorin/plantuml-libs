# Keepassxc


```text
simpleicons-5/K/Keepassxc
```

```text
include('simpleicons-5/K/Keepassxc')
```



| Illustration | Keepassxc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Keepassxc.png) | ![illustration for Keepassxc](../../simpleicons-5/K/Keepassxc.Local.png) |




## Keepassxc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Keepassxc
include('simpleicons-5/K/Keepassxc')

' renders the element
Keepassxc('Keepassxc', 'Keepassxc', 'an optional tech label')
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

' loads the Item which embeds the element Keepassxc
include('simpleicons-5/K/Keepassxc')

' renders the element
Keepassxc('Keepassxc', 'Keepassxc', 'an optional tech label')
@enduml
```

