# Forestry


```text
simpleicons-8/F/Forestry
```

```text
include('simpleicons-8/F/Forestry')
```



| Illustration | Forestry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Forestry.png) | ![illustration for Forestry](../../simpleicons-8/F/Forestry.Local.png) |




## Forestry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Forestry
include('simpleicons-8/F/Forestry')

' renders the element
Forestry('Forestry', 'Forestry', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Forestry
include('simpleicons-8/F/Forestry')

' renders the element
Forestry('Forestry', 'Forestry', 'an optional tech label', 'an optional description')
@enduml
```

