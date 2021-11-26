# Forestry


```text
simpleicons-5/F/Forestry
```

```text
include('simpleicons-5/F/Forestry')
```



| Illustration | Forestry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Forestry.png) | ![illustration for Forestry](../../simpleicons-5/F/Forestry.Local.png) |




## Forestry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Forestry
include('simpleicons-5/F/Forestry')

' renders the element
Forestry('Forestry', 'Forestry', 'an optional tech label')
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

' loads the Item which embeds the element Forestry
include('simpleicons-5/F/Forestry')

' renders the element
Forestry('Forestry', 'Forestry', 'an optional tech label')
@enduml
```

