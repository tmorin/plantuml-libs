# Beatsbydre


```text
simpleicons-5/B/Beatsbydre
```

```text
include('simpleicons-5/B/Beatsbydre')
```



| Illustration | Beatsbydre |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Beatsbydre.png) | ![illustration for Beatsbydre](../../simpleicons-5/B/Beatsbydre.Local.png) |




## Beatsbydre

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Beatsbydre
include('simpleicons-5/B/Beatsbydre')

' renders the element
Beatsbydre('Beatsbydre', 'Beatsbydre', 'an optional tech label')
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

' loads the Item which embeds the element Beatsbydre
include('simpleicons-5/B/Beatsbydre')

' renders the element
Beatsbydre('Beatsbydre', 'Beatsbydre', 'an optional tech label')
@enduml
```

