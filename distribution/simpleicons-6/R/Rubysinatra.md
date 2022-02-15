# Rubysinatra


```text
simpleicons-6/R/Rubysinatra
```

```text
include('simpleicons-6/R/Rubysinatra')
```



| Illustration | Rubysinatra |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rubysinatra.png) | ![illustration for Rubysinatra](../../simpleicons-6/R/Rubysinatra.Local.png) |




## Rubysinatra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rubysinatra
include('simpleicons-6/R/Rubysinatra')

' renders the element
Rubysinatra('Rubysinatra', 'Rubysinatra', 'an optional tech label')
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

' loads the Item which embeds the element Rubysinatra
include('simpleicons-6/R/Rubysinatra')

' renders the element
Rubysinatra('Rubysinatra', 'Rubysinatra', 'an optional tech label')
@enduml
```

