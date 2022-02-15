# Unsplash


```text
simpleicons-6/U/Unsplash
```

```text
include('simpleicons-6/U/Unsplash')
```



| Illustration | Unsplash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Unsplash.png) | ![illustration for Unsplash](../../simpleicons-6/U/Unsplash.Local.png) |




## Unsplash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Unsplash
include('simpleicons-6/U/Unsplash')

' renders the element
Unsplash('Unsplash', 'Unsplash', 'an optional tech label')
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

' loads the Item which embeds the element Unsplash
include('simpleicons-6/U/Unsplash')

' renders the element
Unsplash('Unsplash', 'Unsplash', 'an optional tech label')
@enduml
```

