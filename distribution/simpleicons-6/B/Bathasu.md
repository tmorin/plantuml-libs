# Bathasu


```text
simpleicons-6/B/Bathasu
```

```text
include('simpleicons-6/B/Bathasu')
```



| Illustration | Bathasu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bathasu.png) | ![illustration for Bathasu](../../simpleicons-6/B/Bathasu.Local.png) |




## Bathasu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bathasu
include('simpleicons-6/B/Bathasu')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bathasu
include('simpleicons-6/B/Bathasu')

' renders the element
Bathasu('Bathasu', 'Bathasu', 'an optional tech label')
@enduml
```

