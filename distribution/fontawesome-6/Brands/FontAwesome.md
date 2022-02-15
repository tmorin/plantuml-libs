# FontAwesome


```text
fontawesome-6/Brands/FontAwesome
```

```text
include('fontawesome-6/Brands/FontAwesome')
```



| Illustration | FontAwesome |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/FontAwesome.png) | ![illustration for FontAwesome](../../fontawesome-6/Brands/FontAwesome.Local.png) |




## FontAwesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FontAwesome
include('fontawesome-6/Brands/FontAwesome')

' renders the element
FontAwesome('FontAwesome', 'Font Awesome', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FontAwesome
include('fontawesome-6/Brands/FontAwesome')

' renders the element
FontAwesome('FontAwesome', 'Font Awesome', 'an optional tech label')
@enduml
```

