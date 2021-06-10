# Sort


```text
fontawesome-5/Solid/Sort
```

```text
include('fontawesome-5/Solid/Sort')
```



| Illustration | Sort |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Sort.png) | ![illustration for Sort](../../fontawesome-5/Solid/Sort.Local.png) |




## Sort

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sort
include('fontawesome-5/Solid/Sort')

' renders the element
Sort('Sort', 'Sort', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sort
include('fontawesome-5/Solid/Sort')

' renders the element
Sort('Sort', 'Sort', 'an optional tech label')
@enduml
```

