# Egghead


```text
simpleicons-6/E/Egghead
```

```text
include('simpleicons-6/E/Egghead')
```



| Illustration | Egghead |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Egghead.png) | ![illustration for Egghead](../../simpleicons-6/E/Egghead.Local.png) |




## Egghead

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Egghead
include('simpleicons-6/E/Egghead')

' renders the element
Egghead('Egghead', 'Egghead', 'an optional tech label')
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

' loads the Item which embeds the element Egghead
include('simpleicons-6/E/Egghead')

' renders the element
Egghead('Egghead', 'Egghead', 'an optional tech label')
@enduml
```

