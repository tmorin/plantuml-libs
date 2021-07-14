# Cloudsmith


```text
simpleicons-5/C/Cloudsmith
```

```text
include('simpleicons-5/C/Cloudsmith')
```



| Illustration | Cloudsmith |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cloudsmith.png) | ![illustration for Cloudsmith](../../simpleicons-5/C/Cloudsmith.Local.png) |




## Cloudsmith

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cloudsmith
include('simpleicons-5/C/Cloudsmith')

' renders the element
Cloudsmith('Cloudsmith', 'Cloudsmith', 'an optional tech label')
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

' loads the Item which embeds the element Cloudsmith
include('simpleicons-5/C/Cloudsmith')

' renders the element
Cloudsmith('Cloudsmith', 'Cloudsmith', 'an optional tech label')
@enduml
```

