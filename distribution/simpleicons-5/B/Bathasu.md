# Bathasu


```text
simpleicons-5/B/Bathasu
```

```text
include('simpleicons-5/B/Bathasu')
```



| Illustration | Bathasu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bathasu.png) | ![illustration for Bathasu](../../simpleicons-5/B/Bathasu.Local.png) |




## Bathasu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bathasu
include('simpleicons-5/B/Bathasu')

' renders the element
Bathasu('Bathasu', 'Bathasu', 'an optional tech label')
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

' loads the Item which embeds the element Bathasu
include('simpleicons-5/B/Bathasu')

' renders the element
Bathasu('Bathasu', 'Bathasu', 'an optional tech label')
@enduml
```

