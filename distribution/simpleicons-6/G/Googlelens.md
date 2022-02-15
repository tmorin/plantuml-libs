# Googlelens


```text
simpleicons-6/G/Googlelens
```

```text
include('simpleicons-6/G/Googlelens')
```



| Illustration | Googlelens |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlelens.png) | ![illustration for Googlelens](../../simpleicons-6/G/Googlelens.Local.png) |




## Googlelens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlelens
include('simpleicons-6/G/Googlelens')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlelens
include('simpleicons-6/G/Googlelens')

' renders the element
Googlelens('Googlelens', 'Googlelens', 'an optional tech label')
@enduml
```

