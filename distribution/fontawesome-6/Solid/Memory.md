# Memory


```text
fontawesome-6/Solid/Memory
```

```text
include('fontawesome-6/Solid/Memory')
```



| Illustration | Memory |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Memory.png) | ![illustration for Memory](../../fontawesome-6/Solid/Memory.Local.png) |




## Memory

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Memory
include('fontawesome-6/Solid/Memory')

' renders the element
Memory('Memory', 'Memory', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Memory
include('fontawesome-6/Solid/Memory')

' renders the element
Memory('Memory', 'Memory', 'an optional tech label')
@enduml
```

