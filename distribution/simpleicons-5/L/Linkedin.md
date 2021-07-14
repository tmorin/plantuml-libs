# Linkedin


```text
simpleicons-5/L/Linkedin
```

```text
include('simpleicons-5/L/Linkedin')
```



| Illustration | Linkedin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Linkedin.png) | ![illustration for Linkedin](../../simpleicons-5/L/Linkedin.Local.png) |




## Linkedin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Linkedin
include('simpleicons-5/L/Linkedin')

' renders the element
Linkedin('Linkedin', 'Linkedin', 'an optional tech label')
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

' loads the Item which embeds the element Linkedin
include('simpleicons-5/L/Linkedin')

' renders the element
Linkedin('Linkedin', 'Linkedin', 'an optional tech label')
@enduml
```

