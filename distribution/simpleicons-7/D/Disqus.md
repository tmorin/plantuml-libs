# Disqus


```text
simpleicons-7/D/Disqus
```

```text
include('simpleicons-7/D/Disqus')
```



| Illustration | Disqus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Disqus.png) | ![illustration for Disqus](../../simpleicons-7/D/Disqus.Local.png) |




## Disqus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Disqus
include('simpleicons-7/D/Disqus')

' renders the element
Disqus('Disqus', 'Disqus', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Disqus
include('simpleicons-7/D/Disqus')

' renders the element
Disqus('Disqus', 'Disqus', 'an optional tech label', 'an optional description')
@enduml
```

