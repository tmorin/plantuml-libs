# CreativeCommonsZero


```text
fontawesome-5/Brands/CreativeCommonsZero
```

```text
include('fontawesome-5/Brands/CreativeCommonsZero')
```



| Illustration | CreativeCommonsZero |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CreativeCommonsZero.png) | ![illustration for CreativeCommonsZero](../../fontawesome-5/Brands/CreativeCommonsZero.Local.png) |




## CreativeCommonsZero

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CreativeCommonsZero
include('fontawesome-5/Brands/CreativeCommonsZero')

' renders the element
CreativeCommonsZero('CreativeCommonsZero', 'Creative Commons Zero', 'an optional tech label')
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

' loads the Item which embeds the element CreativeCommonsZero
include('fontawesome-5/Brands/CreativeCommonsZero')

' renders the element
CreativeCommonsZero('CreativeCommonsZero', 'Creative Commons Zero', 'an optional tech label')
@enduml
```

