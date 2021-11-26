# Page4


```text
fontawesome-5/Brands/Page4
```

```text
include('fontawesome-5/Brands/Page4')
```



| Illustration | Page4 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Page4.png) | ![illustration for Page4](../../fontawesome-5/Brands/Page4.Local.png) |




## Page4

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Page4
include('fontawesome-5/Brands/Page4')

' renders the element
Page4('Page4', 'Page4', 'an optional tech label')
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

' loads the Item which embeds the element Page4
include('fontawesome-5/Brands/Page4')

' renders the element
Page4('Page4', 'Page4', 'an optional tech label')
@enduml
```

