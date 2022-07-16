# Googlehangouts


```text
simpleicons-7/G/Googlehangouts
```

```text
include('simpleicons-7/G/Googlehangouts')
```



| Illustration | Googlehangouts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googlehangouts.png) | ![illustration for Googlehangouts](../../simpleicons-7/G/Googlehangouts.Local.png) |




## Googlehangouts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlehangouts
include('simpleicons-7/G/Googlehangouts')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlehangouts
include('simpleicons-7/G/Googlehangouts')

' renders the element
Googlehangouts('Googlehangouts', 'Googlehangouts', 'an optional tech label')
@enduml
```

