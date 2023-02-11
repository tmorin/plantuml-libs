# Unsplash


```text
simpleicons-8/U/Unsplash
```

```text
include('simpleicons-8/U/Unsplash')
```



| Illustration | Unsplash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/U/Unsplash.png) | ![illustration for Unsplash](../../simpleicons-8/U/Unsplash.Local.png) |




## Unsplash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Unsplash
include('simpleicons-8/U/Unsplash')

' renders the element
Unsplash('Unsplash', 'Unsplash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unsplash
include('simpleicons-8/U/Unsplash')

' renders the element
Unsplash('Unsplash', 'Unsplash', 'an optional tech label', 'an optional description')
@enduml
```

