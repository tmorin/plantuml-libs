# Soundcloud


```text
simpleicons-5/S/Soundcloud
```

```text
include('simpleicons-5/S/Soundcloud')
```



| Illustration | Soundcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Soundcloud.png) | ![illustration for Soundcloud](../../simpleicons-5/S/Soundcloud.Local.png) |




## Soundcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Soundcloud
include('simpleicons-5/S/Soundcloud')

' renders the element
Soundcloud('Soundcloud', 'Soundcloud', 'an optional tech label')
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

' loads the Item which embeds the element Soundcloud
include('simpleicons-5/S/Soundcloud')

' renders the element
Soundcloud('Soundcloud', 'Soundcloud', 'an optional tech label')
@enduml
```

