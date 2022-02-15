# Rubygems


```text
simpleicons-6/R/Rubygems
```

```text
include('simpleicons-6/R/Rubygems')
```



| Illustration | Rubygems |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rubygems.png) | ![illustration for Rubygems](../../simpleicons-6/R/Rubygems.Local.png) |




## Rubygems

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rubygems
include('simpleicons-6/R/Rubygems')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rubygems
include('simpleicons-6/R/Rubygems')

' renders the element
Rubygems('Rubygems', 'Rubygems', 'an optional tech label')
@enduml
```

