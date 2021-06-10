# Apple


```text
fontawesome-5/Brands/Apple
```

```text
include('fontawesome-5/Brands/Apple')
```



| Illustration | Apple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Apple.png) | ![illustration for Apple](../../fontawesome-5/Brands/Apple.Local.png) |




## Apple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Apple
include('fontawesome-5/Brands/Apple')

' renders the element
Apple('Apple', 'Apple', 'an optional tech label')
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

' loads the Item which embeds the element Apple
include('fontawesome-5/Brands/Apple')

' renders the element
Apple('Apple', 'Apple', 'an optional tech label')
@enduml
```

