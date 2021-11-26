# Awsamplify


```text
simpleicons-5/A/Awsamplify
```

```text
include('simpleicons-5/A/Awsamplify')
```



| Illustration | Awsamplify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Awsamplify.png) | ![illustration for Awsamplify](../../simpleicons-5/A/Awsamplify.Local.png) |




## Awsamplify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Awsamplify
include('simpleicons-5/A/Awsamplify')

' renders the element
Awsamplify('Awsamplify', 'Awsamplify', 'an optional tech label')
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

' loads the Item which embeds the element Awsamplify
include('simpleicons-5/A/Awsamplify')

' renders the element
Awsamplify('Awsamplify', 'Awsamplify', 'an optional tech label')
@enduml
```

