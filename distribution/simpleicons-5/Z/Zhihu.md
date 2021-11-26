# Zhihu


```text
simpleicons-5/Z/Zhihu
```

```text
include('simpleicons-5/Z/Zhihu')
```



| Illustration | Zhihu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Z/Zhihu.png) | ![illustration for Zhihu](../../simpleicons-5/Z/Zhihu.Local.png) |




## Zhihu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zhihu
include('simpleicons-5/Z/Zhihu')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zhihu
include('simpleicons-5/Z/Zhihu')

' renders the element
Zhihu('Zhihu', 'Zhihu', 'an optional tech label')
@enduml
```

