# TheRedYeti


```text
fontawesome-5/Brands/TheRedYeti
```

```text
include('fontawesome-5/Brands/TheRedYeti')
```



| Illustration | TheRedYeti |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/TheRedYeti.png) | ![illustration for TheRedYeti](../../fontawesome-5/Brands/TheRedYeti.Local.png) |




## TheRedYeti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TheRedYeti
include('fontawesome-5/Brands/TheRedYeti')

' renders the element
TheRedYeti('TheRedYeti', 'The Red Yeti', 'an optional tech label')
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

' loads the Item which embeds the element TheRedYeti
include('fontawesome-5/Brands/TheRedYeti')

' renders the element
TheRedYeti('TheRedYeti', 'The Red Yeti', 'an optional tech label')
@enduml
```

