# Googlelens


```text
simpleicons-5/G/Googlelens
```

```text
include('simpleicons-5/G/Googlelens')
```



| Illustration | Googlelens |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlelens.png) | ![illustration for Googlelens](../../simpleicons-5/G/Googlelens.Local.png) |




## Googlelens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlelens
include('simpleicons-5/G/Googlelens')

' renders the element
Googlelens('Googlelens', 'Googlelens', 'an optional tech label')
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

' loads the Item which embeds the element Googlelens
include('simpleicons-5/G/Googlelens')

' renders the element
Googlelens('Googlelens', 'Googlelens', 'an optional tech label')
@enduml
```

