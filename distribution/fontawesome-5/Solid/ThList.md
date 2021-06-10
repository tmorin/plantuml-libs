# ThList


```text
fontawesome-5/Solid/ThList
```

```text
include('fontawesome-5/Solid/ThList')
```



| Illustration | ThList |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ThList.png) | ![illustration for ThList](../../fontawesome-5/Solid/ThList.Local.png) |




## ThList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ThList
include('fontawesome-5/Solid/ThList')

' renders the element
ThList('ThList', 'Th List', 'an optional tech label')
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

' loads the Item which embeds the element ThList
include('fontawesome-5/Solid/ThList')

' renders the element
ThList('ThList', 'Th List', 'an optional tech label')
@enduml
```

