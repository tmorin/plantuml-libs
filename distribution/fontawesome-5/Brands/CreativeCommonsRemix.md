# CreativeCommonsRemix


```text
fontawesome-5/Brands/CreativeCommonsRemix
```

```text
include('fontawesome-5/Brands/CreativeCommonsRemix')
```



| Illustration | CreativeCommonsRemix |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CreativeCommonsRemix.png) | ![illustration for CreativeCommonsRemix](../../fontawesome-5/Brands/CreativeCommonsRemix.Local.png) |




## CreativeCommonsRemix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CreativeCommonsRemix
include('fontawesome-5/Brands/CreativeCommonsRemix')

' renders the element
CreativeCommonsRemix('CreativeCommonsRemix', 'Creative Commons Remix', 'an optional tech label')
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

' loads the Item which embeds the element CreativeCommonsRemix
include('fontawesome-5/Brands/CreativeCommonsRemix')

' renders the element
CreativeCommonsRemix('CreativeCommonsRemix', 'Creative Commons Remix', 'an optional tech label')
@enduml
```

