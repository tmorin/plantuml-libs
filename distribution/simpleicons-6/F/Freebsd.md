# Freebsd


```text
simpleicons-6/F/Freebsd
```

```text
include('simpleicons-6/F/Freebsd')
```



| Illustration | Freebsd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Freebsd.png) | ![illustration for Freebsd](../../simpleicons-6/F/Freebsd.Local.png) |




## Freebsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Freebsd
include('simpleicons-6/F/Freebsd')

' renders the element
Freebsd('Freebsd', 'Freebsd', 'an optional tech label')
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

' loads the Item which embeds the element Freebsd
include('simpleicons-6/F/Freebsd')

' renders the element
Freebsd('Freebsd', 'Freebsd', 'an optional tech label')
@enduml
```

