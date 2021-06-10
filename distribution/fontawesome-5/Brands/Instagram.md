# Instagram


```text
fontawesome-5/Brands/Instagram
```

```text
include('fontawesome-5/Brands/Instagram')
```



| Illustration | Instagram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Instagram.png) | ![illustration for Instagram](../../fontawesome-5/Brands/Instagram.Local.png) |




## Instagram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Instagram
include('fontawesome-5/Brands/Instagram')

' renders the element
Instagram('Instagram', 'Instagram', 'an optional tech label')
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

' loads the Item which embeds the element Instagram
include('fontawesome-5/Brands/Instagram')

' renders the element
Instagram('Instagram', 'Instagram', 'an optional tech label')
@enduml
```

