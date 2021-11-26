# Zhihu


```text
fontawesome-5/Brands/Zhihu
```

```text
include('fontawesome-5/Brands/Zhihu')
```



| Illustration | Zhihu |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Zhihu.png) | ![illustration for Zhihu](../../fontawesome-5/Brands/Zhihu.Local.png) |




## Zhihu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Zhihu
include('fontawesome-5/Brands/Zhihu')

' renders the element
Zhihu('Zhihu', 'Zhihu', 'an optional tech label')
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

' loads the Item which embeds the element Zhihu
include('fontawesome-5/Brands/Zhihu')

' renders the element
Zhihu('Zhihu', 'Zhihu', 'an optional tech label')
@enduml
```

