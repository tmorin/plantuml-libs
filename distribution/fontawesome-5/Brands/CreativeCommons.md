# CreativeCommons


```text
fontawesome-5/Brands/CreativeCommons
```

```text
include('fontawesome-5/Brands/CreativeCommons')
```



| Illustration | CreativeCommons |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CreativeCommons.png) | ![illustration for CreativeCommons](../../fontawesome-5/Brands/CreativeCommons.Local.png) |




## CreativeCommons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CreativeCommons
include('fontawesome-5/Brands/CreativeCommons')

' renders the element
CreativeCommons('CreativeCommons', 'Creative Commons', 'an optional tech label')
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

' loads the Item which embeds the element CreativeCommons
include('fontawesome-5/Brands/CreativeCommons')

' renders the element
CreativeCommons('CreativeCommons', 'Creative Commons', 'an optional tech label')
@enduml
```

