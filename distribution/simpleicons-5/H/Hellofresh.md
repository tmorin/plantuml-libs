# Hellofresh


```text
simpleicons-5/H/Hellofresh
```

```text
include('simpleicons-5/H/Hellofresh')
```



| Illustration | Hellofresh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hellofresh.png) | ![illustration for Hellofresh](../../simpleicons-5/H/Hellofresh.Local.png) |




## Hellofresh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hellofresh
include('simpleicons-5/H/Hellofresh')

' renders the element
Hellofresh('Hellofresh', 'Hellofresh', 'an optional tech label')
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

' loads the Item which embeds the element Hellofresh
include('simpleicons-5/H/Hellofresh')

' renders the element
Hellofresh('Hellofresh', 'Hellofresh', 'an optional tech label')
@enduml
```

