# Coffee


```text
fontawesome-5/Solid/Coffee
```

```text
include('fontawesome-5/Solid/Coffee')
```



| Illustration | Coffee |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Coffee.png) | ![illustration for Coffee](../../fontawesome-5/Solid/Coffee.Local.png) |




## Coffee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Coffee
include('fontawesome-5/Solid/Coffee')

' renders the element
Coffee('Coffee', 'Coffee', 'an optional tech label')
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

' loads the Item which embeds the element Coffee
include('fontawesome-5/Solid/Coffee')

' renders the element
Coffee('Coffee', 'Coffee', 'an optional tech label')
@enduml
```

