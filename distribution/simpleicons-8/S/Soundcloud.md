# Soundcloud


```text
simpleicons-8/S/Soundcloud
```

```text
include('simpleicons-8/S/Soundcloud')
```



| Illustration | Soundcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Soundcloud.png) | ![illustration for Soundcloud](../../simpleicons-8/S/Soundcloud.Local.png) |




## Soundcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Soundcloud
include('simpleicons-8/S/Soundcloud')

' renders the element
Soundcloud('Soundcloud', 'Soundcloud', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Soundcloud
include('simpleicons-8/S/Soundcloud')

' renders the element
Soundcloud('Soundcloud', 'Soundcloud', 'an optional tech label', 'an optional description')
@enduml
```

