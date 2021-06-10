# Link


```text
fontawesome-5/Solid/Link
```

```text
include('fontawesome-5/Solid/Link')
```



| Illustration | Link |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Link.png) | ![illustration for Link](../../fontawesome-5/Solid/Link.Local.png) |




## Link

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Link
include('fontawesome-5/Solid/Link')

' renders the element
Link('Link', 'Link', 'an optional tech label')
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

' loads the Item which embeds the element Link
include('fontawesome-5/Solid/Link')

' renders the element
Link('Link', 'Link', 'an optional tech label')
@enduml
```

