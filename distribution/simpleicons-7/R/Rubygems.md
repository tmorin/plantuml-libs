# Rubygems


```text
simpleicons-7/R/Rubygems
```

```text
include('simpleicons-7/R/Rubygems')
```



| Illustration | Rubygems |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rubygems.png) | ![illustration for Rubygems](../../simpleicons-7/R/Rubygems.Local.png) |




## Rubygems

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rubygems
include('simpleicons-7/R/Rubygems')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rubygems
include('simpleicons-7/R/Rubygems')

' renders the element
Rubygems('Rubygems', 'Rubygems', 'an optional tech label')
@enduml
```

