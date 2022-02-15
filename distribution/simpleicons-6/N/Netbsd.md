# Netbsd


```text
simpleicons-6/N/Netbsd
```

```text
include('simpleicons-6/N/Netbsd')
```



| Illustration | Netbsd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Netbsd.png) | ![illustration for Netbsd](../../simpleicons-6/N/Netbsd.Local.png) |




## Netbsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Netbsd
include('simpleicons-6/N/Netbsd')

' renders the element
Netbsd('Netbsd', 'Netbsd', 'an optional tech label')
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

' loads the Item which embeds the element Netbsd
include('simpleicons-6/N/Netbsd')

' renders the element
Netbsd('Netbsd', 'Netbsd', 'an optional tech label')
@enduml
```

