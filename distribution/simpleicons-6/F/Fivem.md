# Fivem


```text
simpleicons-6/F/Fivem
```

```text
include('simpleicons-6/F/Fivem')
```



| Illustration | Fivem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fivem.png) | ![illustration for Fivem](../../simpleicons-6/F/Fivem.Local.png) |




## Fivem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fivem
include('simpleicons-6/F/Fivem')

' renders the element
Fivem('Fivem', 'Fivem', 'an optional tech label')
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

' loads the Item which embeds the element Fivem
include('simpleicons-6/F/Fivem')

' renders the element
Fivem('Fivem', 'Fivem', 'an optional tech label')
@enduml
```

