# Rubygems


```text
simpleicons-5/R/Rubygems
```

```text
include('simpleicons-5/R/Rubygems')
```



| Illustration | Rubygems |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Rubygems.png) | ![illustration for Rubygems](../../simpleicons-5/R/Rubygems.Local.png) |




## Rubygems

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rubygems
include('simpleicons-5/R/Rubygems')

' renders the element
Rubygems('Rubygems', 'Rubygems', 'an optional tech label')
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

' loads the Item which embeds the element Rubygems
include('simpleicons-5/R/Rubygems')

' renders the element
Rubygems('Rubygems', 'Rubygems', 'an optional tech label')
@enduml
```

