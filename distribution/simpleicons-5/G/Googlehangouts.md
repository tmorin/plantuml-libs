# Googlehangouts


```text
simpleicons-5/G/Googlehangouts
```

```text
include('simpleicons-5/G/Googlehangouts')
```



| Illustration | Googlehangouts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlehangouts.png) | ![illustration for Googlehangouts](../../simpleicons-5/G/Googlehangouts.Local.png) |




## Googlehangouts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlehangouts
include('simpleicons-5/G/Googlehangouts')

' renders the element
Googlehangouts('Googlehangouts', 'Googlehangouts', 'an optional tech label')
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

' loads the Item which embeds the element Googlehangouts
include('simpleicons-5/G/Googlehangouts')

' renders the element
Googlehangouts('Googlehangouts', 'Googlehangouts', 'an optional tech label')
@enduml
```

