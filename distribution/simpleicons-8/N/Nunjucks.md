# Nunjucks


```text
simpleicons-8/N/Nunjucks
```

```text
include('simpleicons-8/N/Nunjucks')
```



| Illustration | Nunjucks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Nunjucks.png) | ![illustration for Nunjucks](../../simpleicons-8/N/Nunjucks.Local.png) |




## Nunjucks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Nunjucks
include('simpleicons-8/N/Nunjucks')

' renders the element
Nunjucks('Nunjucks', 'Nunjucks', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Nunjucks
include('simpleicons-8/N/Nunjucks')

' renders the element
Nunjucks('Nunjucks', 'Nunjucks', 'an optional tech label', 'an optional description')
@enduml
```

