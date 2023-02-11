# Affinityphoto


```text
simpleicons-8/A/Affinityphoto
```

```text
include('simpleicons-8/A/Affinityphoto')
```



| Illustration | Affinityphoto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Affinityphoto.png) | ![illustration for Affinityphoto](../../simpleicons-8/A/Affinityphoto.Local.png) |




## Affinityphoto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Affinityphoto
include('simpleicons-8/A/Affinityphoto')

' renders the element
Affinityphoto('Affinityphoto', 'Affinityphoto', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Affinityphoto
include('simpleicons-8/A/Affinityphoto')

' renders the element
Affinityphoto('Affinityphoto', 'Affinityphoto', 'an optional tech label', 'an optional description')
@enduml
```

