# Linkedin


```text
simpleicons-7/L/Linkedin
```

```text
include('simpleicons-7/L/Linkedin')
```



| Illustration | Linkedin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Linkedin.png) | ![illustration for Linkedin](../../simpleicons-7/L/Linkedin.Local.png) |




## Linkedin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Linkedin
include('simpleicons-7/L/Linkedin')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Linkedin
include('simpleicons-7/L/Linkedin')

' renders the element
Linkedin('Linkedin', 'Linkedin', 'an optional tech label')
@enduml
```

