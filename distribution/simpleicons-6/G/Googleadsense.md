# Googleadsense


```text
simpleicons-6/G/Googleadsense
```

```text
include('simpleicons-6/G/Googleadsense')
```



| Illustration | Googleadsense |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googleadsense.png) | ![illustration for Googleadsense](../../simpleicons-6/G/Googleadsense.Local.png) |




## Googleadsense

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googleadsense
include('simpleicons-6/G/Googleadsense')

' renders the element
Googleadsense('Googleadsense', 'Googleadsense', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googleadsense
include('simpleicons-6/G/Googleadsense')

' renders the element
Googleadsense('Googleadsense', 'Googleadsense', 'an optional tech label')
@enduml
```

