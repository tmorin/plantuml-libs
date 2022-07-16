# Rubyonrails


```text
simpleicons-7/R/Rubyonrails
```

```text
include('simpleicons-7/R/Rubyonrails')
```



| Illustration | Rubyonrails |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rubyonrails.png) | ![illustration for Rubyonrails](../../simpleicons-7/R/Rubyonrails.Local.png) |




## Rubyonrails

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rubyonrails
include('simpleicons-7/R/Rubyonrails')

' renders the element
Rubyonrails('Rubyonrails', 'Rubyonrails', 'an optional tech label')
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

' loads the Item which embeds the element Rubyonrails
include('simpleicons-7/R/Rubyonrails')

' renders the element
Rubyonrails('Rubyonrails', 'Rubyonrails', 'an optional tech label')
@enduml
```

